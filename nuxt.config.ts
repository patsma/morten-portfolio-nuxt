// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: ["@nuxtjs/tailwindcss", "@hypernym/nuxt-gsap","@pinia/nuxt"],
    plugins: [
        '~/plugins/route-cleanup.js'
    ],
    ssr: true,
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
            cssnano:
                process.env.NODE_ENV === 'production'
                    ? { preset: ['default', { discardComments: { removeAll: true } }] }
                    : false, // disable cssnano when not in production
        },
    },
})
