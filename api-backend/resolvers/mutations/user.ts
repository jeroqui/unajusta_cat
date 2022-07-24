import { mutationField, nonNull, stringArg } from "nexus";
import * as bcrypt from 'bcrypt';

import { User } from "../models/user";
import { createTokens } from "~~/api-backend/auth";


export const register = mutationField('registerUser', {
    type: User,
    args: {
        username: nonNull(stringArg()),
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
        nom: nonNull(stringArg()),
        cognoms: stringArg()
    },
    resolve:async (root, args, ctx) => {
        const hashedPassword = await bcrypt.hash(args.password, 10);
        return ctx.prisma.user.create({
            data: {
                username: args.username,
                password: hashedPassword,
                persona: {
                    create: {
                        email: args.email,
                        nom: args.nom,
                        cognoms: args.cognoms
                    }
                }
            }
        });
    }
});


export const loginUser = mutationField('loginUser', {
    type: User,
    args: {
        username: nonNull(stringArg()),
        password: nonNull(stringArg())
    },
    resolve: async (root, args, ctx) => {
        const user = await ctx.prisma.user.findUnique({ where: { username: args.username } });
        if (!user) {
            return null;
        }

        const valid = await bcrypt.compare(args.password, user.password);
        if (!valid) {
            return null;
        }

        const { accessToken, refreshToken } = createTokens(user);

        ctx.response.cookie("refresh-token", refreshToken);
        ctx.response.cookie("access-token", accessToken);
        (ctx.request as any).userId = user.id;

        return user;
    }
})