import { objectType } from "nexus";



export const Torneig = objectType({
    name: 'Torneig',
    definition(t) {
        t.string('id', {description: "Id del torneig"})
        t.string('nom')
        t.string('descripcio')
        t.int('grupsMinPersones')
        t.int('grupsMaxPersones')
    },
})



export const Esport = objectType({
    name: 'Esport',
    definition(t) {
        t.int('id')
        t.string('nom')
    },
})