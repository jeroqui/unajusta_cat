import { objectType } from "nexus";


export const User = objectType({
    name: 'User',
    definition(t) {
        t.int('id', {description: "ID of the user"}),
        t.string('username', {description: "Username of the user"})
        t.field('persona', {
            type: 'Persona',
            resolve: async (root, args, ctx) => {
                return await ctx.prisma.persona.findFirst({where: {user: {id: root.id}}});
            }
        })
    }
});



export const Persona = objectType({
    name: 'Persona',
    definition(t) {
        t.string('id'),
        t.string('email'),
        t.string('nom'),
        t.string('cognoms'),
        t.nullable.boolean('active'),
        t.nullable.boolean('persist')
    },
});