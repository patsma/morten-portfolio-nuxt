// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    plugins: [
        '~/plugins/route-cleanup.js'
    ],
    modules: ["@nuxtjs/tailwindcss", "@hypernym/nuxt-gsap","@pinia/nuxt"],
});
