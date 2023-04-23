// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: "static",
  modules: ["@nuxtjs/tailwindcss", "nuxt-gtag", "@nuxt/content"],

  content: {
    // https://content.nuxtjs.org/api/configuration
    highlight: {
      // Theme used in all color schemes.
      theme: "github-dark",
      preload: ["js", "json", "javascript", "lua"],
    },
  },

  gtag: {
    id: "G-D2F2LGNEDM",
  },
});
