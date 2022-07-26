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


class AuthenticationError extends Error {
    constructor() {
      super("username or password don't match to a registered user");
      this.name = 'Authentication';
    }
  }


export const loginUser = mutationField('loginUser', {
    type: User,
    args: {
        username: nonNull(stringArg()),
        password: nonNull(stringArg())
    },
    resolve: async (root, args, ctx) => {
        const user = await ctx.prisma.user.findUnique({ where: { username: args.username } });
        if (!user) {
            throw new AuthenticationError();
        }

        const valid = await bcrypt.compare(args.password, user.password);
        if (!valid) {
            throw new AuthenticationError();
        }

        const { accessToken, refreshToken } = createTokens(user);

        ctx.response.cookie("refresh-token", refreshToken);
        ctx.response.cookie("access-token", accessToken);
        (ctx.request as any).userId = user.id;

        return user;
    }
})



export const logoutUser = mutationField('logoutUser', {
    type: "Boolean",
    resolve: async (root, args, ctx) => {
        if (!(ctx.request as any).userId) {
            return false;
        }

        const user = await ctx.prisma.user.update({
            where: { id: (ctx.request as any).userId },
            data: {
                tokenCount: {
                    increment: 1
                }
            }
        });

        ctx.response.clearCookie('acces-token');
        ctx.response.clearCookie('refresh-token');

        return true;
    }
})