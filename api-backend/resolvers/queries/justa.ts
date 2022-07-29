import { list, nonNull, queryField } from "nexus";
import { Esport } from "../models/justa";

export const esports = queryField('esports', {
    type: list(nonNull(Esport)),
    resolve: async (root, args, ctx) => {
        return ctx.prisma.esport.findMany();
    }
});