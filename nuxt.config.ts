// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  modules: ['@nuxt/content', '@nuxt/icon'],
  icon: {
    size: '8rem',
    mode: 'svg',
    serverBundle: 'local',
  },
  content: {
    preview: {
      api: 'https://api.nuxt.studio'
    },
    build: {
      markdown: {
        highlight: {
          theme: 'github-light',
          langs: ['astro', 'css','graphql', 'html', 'javascript', 'json', 'jsx', 'sql', 'postcss', 'markdown', 'scss', 'typescript', 'tsx', 'vue-html', 'vue', 'yaml']
        }
      }
    }
  },
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4
  }
})