import { defineNuxtConfig } from 'nuxt'
import '@nuxt3/graphql-codegen-module'
// import { InMemoryCache } from '@apollo/client/core'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    serverMiddleware: [
        // Will register file from project server-middleware directory to handle /server-api/* requests
        { path: "/api", handler: "~/api-backend/index.ts" },
    ],
    css: [
        // Load a Node.js module directly (here it's a Sass file)
        'bulma',
        'assets/css/main.scss'
    ],
    buildModules: [
        '@nuxt3/apollo-module',
        '@nuxt3/graphql-codegen-module'
    ],
    modules: [
        '@pinia/nuxt'
        // '@nuxtjs/apollo',
        //   '@nuxtjs/i18n',
    ],
    apollo: {
        clientConfigs: {
            default: {
                uri: 'api/graphql',
                // cache: new InMemoryCache()
            },
        },
    },
    graphqlCodegen: {
        schema: 'http://localhost:3000/api/graphql'
    }
    // i18n: {
    //     locales: [
    //         {
    //           code: 'ca',
    //           file: 'ca-ES.json',
    //           iso: 'ca-ES',
    //           name: 'Català'
    //         },
    //         {
    //           code: 'es',
    //           file: 'es-ES.json',
    //           iso: 'es-ES',
    //           name: 'Español'
    //         },
    //         {
    //           code: 'en',
    //           file: 'en-US.json',
    //           iso: 'en-US',
    //           name: 'English'
    //         }
    //       ],
    //       lazy: true,
    //       langDir: 'lang/',
    //       defaultLocale: 'ca',
    //       baseUrl: function() {return process.env.BASE_URL}
    // },
    // head () {
    //     if (!this.$nuxtI18nHead){

    //         return this.$nuxtI18nHead({ addSeoAttributes: true })
    //     }
    // }
})
