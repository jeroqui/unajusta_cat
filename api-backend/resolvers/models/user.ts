import { objectType } from "nexus";


export const User = objectType({
    name: 'User',
    definition(t) {
        t.int('id', {description: "ID of the user"}),
        t.string('username', {description: "Username of the user"})
    }
});