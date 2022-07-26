import { intArg, list, nonNull, queryField } from "nexus";
import { User } from "../models/user";



export const user = queryField('user', {
    type: User,
    args: {
        userId: nonNull(intArg())
    },
    resolve: async (root, args, ctx) => {
        return ctx.prisma.user.findUnique({where: {id: args.userId}});
    }
})


export const loggedUser = queryField('loggedUser', {
    type: User,
    resolve: async (root, args, ctx) => {
        return ctx.prisma.user.findUnique({where: {id: (ctx.request as any).userId}});
    }
});

export const users = queryField('users', {
    type: list(nonNull(User)),
    resolve: async (root, args, ctx) => {
        return ctx.prisma.user.findMany();
    }
});