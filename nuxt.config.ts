// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/ionic'],
  devtools: { enabled: true },
  ssr: false,
  css: ['~/assets/css/ionic.css'],
  app: {
    buildAssetsDir: 'nuxt',
  },
  experimental: {
    payloadExtraction: false
  }
})
