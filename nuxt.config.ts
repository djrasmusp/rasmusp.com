import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  modules: [
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/eslint',
    '@nuxtjs/seo',
    '@nuxt/content',
  ],
  css: ['~/assets/css/main.css'],
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
  site: {
    name: 'Rasmus P',
  },
  ogImage: {
    fonts: ['Geist+Mono:400', 'Geist+Mono:700'],
    googleFontMirror: true,
  },
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
