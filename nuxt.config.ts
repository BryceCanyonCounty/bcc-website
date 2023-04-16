// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    target: 'static',
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-gtag'
    ],
    
    gtag: {
        id: 'G-D2F2LGNEDM'
    }
})
