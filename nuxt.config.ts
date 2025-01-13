// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/fonts', '@nuxt/icon'],
  css: ['@/assets/css/base.css', '@/assets/css/transitions.css'],
  icon: {
    customCollections: [
      {
        prefix: 'custom',
        dir: './assets/svg'
      },
    ],
  },
  runtimeConfig: {
    proMail: '',
    sendgridApiKey: '',
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  build: {
    transpile: ['gsap']
  },
})