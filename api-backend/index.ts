import dotenv from 'dotenv';

// import "reflect-metadata";

import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import cookieParser from 'cookie-parser';

import jsonwebtoken from 'jsonwebtoken';
import { createTokens } from './auth';
import { schema } from './schema';
import {prisma} from './clients/prisma'
import { createContext } from './context';

dotenv.config();

const app = express();

async function startServer() {


    const apolloServer = new ApolloServer({
        schema,
        context: createContext
    });

    await apolloServer.start();

    // app.use
    app.use(express.json());
    app.use(cookieParser())

    app.use(async (req: any, res, next) => {
        const accessToken = req.cookies['access-token'];
        const refreshToken = req.cookies['refresh-token'];

        if (!refreshToken && !accessToken) {
            return next();
        }

        try {
            const data = jsonwebtoken.verify(accessToken, process.env.ACCESS_TOKEN_SECRET as string) as any;
            req.userId = data.userId;
        } catch { }

        if (!refreshToken) {
            return next();
        }

        let data;

        try {
            data = jsonwebtoken.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET as string) as any;
        } catch {
            return next();
        }

        const user = await prisma.user.findUnique({ where: { id: data.userId } });
        // invalid token, or invalidated token
        if (!user || user.tokenCount !== data.tokenCount) {
            return next();
        }

        const newTokens = createTokens(user);
        res.cookie("refresh-token", newTokens.refreshToken);
        res.cookie("access-token", newTokens.accessToken);
        req.userId = user.id;

        next()
    });

    apolloServer.applyMiddleware({ app });


    // Load routes
    app.get('/', (req, res) => {
        res.send('Hi there');
    });

}

startServer();

export default app;