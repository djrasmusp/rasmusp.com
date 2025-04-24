import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  modules: ['@nuxt/fonts', '@nuxt/content', '@nuxt/icon', '@nuxt/eslint'],
  css: ['~/assets/css/main.css'],
  fonts: {
    families: [{ name: 'Roboto Mono', provider: 'google' }],
    defaults: {
      weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
    provider: 'google',
  },
  icon: {
    mode: 'svg',
    serverBundle: 'local',
  },
  content: {
    preview: {
      dev: true,
      api: 'https://api.nuxt.studio',
    },
    build: {
      markdown: {
        highlight: {
          theme: 'github-light',
        },
      },
    },
  },
  devtools: { enabled: false },
  future: {
    compatibilityVersion: 4,
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
