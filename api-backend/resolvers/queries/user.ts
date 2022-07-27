import { intArg, list, nonNull, queryField, stringArg } from "nexus";
import { Persona, User } from "../models/user";



export const user = queryField('user', {
    type: User,
    args: {
        userId: intArg({default: undefined}),
        username: stringArg({default: undefined})
    },
    resolve: async (root, args, ctx) => {
        return ctx.prisma.user.findUniqueOrThrow({where: {id: args.userId, username: args.username},
            // include: {persona: true}
        });
    }
});


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


export const persona = queryField('persona', {
    type: Persona,
    args: {
        id: stringArg({default: undefined}),
        email: stringArg({default: undefined})
    },
    resolve: async (root, args, ctx) => {
        return ctx.prisma.persona.findUniqueOrThrow({where: {id: args.id, email: args.email}})
    }
})