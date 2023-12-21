// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/ionic', '@nuxtjs/tailwindcss'],
  devtools: { enabled: true },
  ssr: false,
  css: ['~/assets/css/ionic.css'],
})
