import { makeSchema } from "nexus";
import { join } from "path";
import * as types from './resolvers/index';

export const schema = makeSchema({
    types,
    outputs: {
        typegen: join(process.cwd(), "api-backend", "generated", "nexus-typegen.ts"),
        schema: join(process.cwd(), "api-backend", 'graphql', 'schema.graphql')
    },
    contextType: {
        export: 'Context',
        module: join(process.cwd(), 'api-backend', 'context.ts')
    }
});