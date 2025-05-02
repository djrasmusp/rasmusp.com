import { field, group } from '@nuxt/content/preview'

export default defineNuxtSchema({
  appConfig: {
    general: group({
      title: 'General',
      description: 'General configuration.',
      icon: 'i-mdi-cog-outline',
      fields: {
        email: field({
          type: 'string',
          title: 'Email',
          icon: 'i-mdi-at',
          default: '',
        }),
        github: field({
          type: 'string',
          title: 'Github handle',
          icon: 'i-mdi-github',
          default: '',
        }),
        linkedin: field({
          type: 'string',
          title: 'Linkedin handle',
          icon: 'i-mdi-linkedin',
          default: '',
        }),
        twitter: field({
          type: 'string',
          title: 'Twitter handle',
          icon: 'i-mdi-twitter',
          default: '',
        }),
        bluesky: field({
          type: 'string',
          title: 'Bluesky handle',
          icon: 'i-mdi-butterfly-outline',
          default: '',
        }),
      },
    }),
    seo: group({
      title: 'SEO',
      description: 'SEO configuration.',
      icon: 'i-ph-app-window',
      fields: {
        siteName: field({
          type: 'string',
          title: 'Site Name',
          description:
            'Name used in ogSiteName and used as second part of your page title (My page title - Nuxt UI Pro).',
          icon: 'i-mdi-web',
          default: '',
        }),
        tagline: field({
          type: 'string',
          title: 'Tagline',
          icon: 'i-mdi-web',
          default: '',
        }),
      },
    }),
    tils: group({
      title: 'TILs',
      description: 'Today I Learned configuration.',
      fields: {
        numOfArticles: field({
          type: 'number',
          title: 'Number of articles',
          default: 10,
        }),
      },
    }),
    header: group({
      title: 'Header',
      description: 'Header configuration.',
      icon: 'i-mdi-page-layout-header',
      fields: {
        title: field({
          type: 'string',
          title: 'Title',
          description: 'Title to display in the header.',
          icon: 'i-mdi-format-title',
          default: '',
        }),
        to: field({
          type: 'string',
          title: 'To',
          description: 'URL to redirect to when the title is clicked.',
          icon: 'i-mdi-link-variant',
          default: '',
        }),
        logo: group({
          title: 'Logo',
          description: 'Header logo configuration.',
          icon: 'i-mdi-image-filter-center-focus-strong-outline',
          fields: {
            light: field({
              type: 'media',
              title: 'Light Mode Logo',
              description: 'Pick an image from your gallery.',
              icon: 'i-mdi-white-balance-sunny',
              default: '',
            }),
            dark: field({
              type: 'media',
              title: 'Dark Mode Logo',
              description: 'Pick an image from your gallery.',
              icon: 'i-mdi-moon-waning-crescent',
              default: '',
            }),
            alt: field({
              type: 'string',
              title: 'Alt',
              description: 'Alt to display for accessibility.',
              icon: 'i-mdi-alphabet-latin',
              default: '',
            }),
          },
        }),
        search: field({
          type: 'boolean',
          title: 'Search Bar',
          description: 'Hide or display the search bar.',
          icon: 'i-mdi-magnify',
          default: true,
        }),
        colorMode: field({
          type: 'boolean',
          title: 'Color Mode',
          description: 'Hide or display the color mode button in your header.',
          icon: 'i-mdi-moon-waning-crescent',
          default: true,
        }),
        links: field({
          type: 'array',
          title: 'Links',
          description: 'Array of link object displayed in header.',
          icon: 'i-mdi-link-variant',
          default: [],
        }),
      },
    }),
    footer: group({
      title: 'Footer',
      description: 'Footer configuration.',
      icon: 'i-mdi-page-layout-footer',
      fields: {
        credits: field({
          type: 'string',
          title: 'Footer credits section',
          description: 'Text to display as credits in the footer.',
          icon: 'i-mdi-circle-edit-outline',
          default: '',
        }),
        links: field({
          type: 'array',
          title: 'Links',
          description: 'Array of link object displayed in footer.',
          icon: 'i-mdi-link-variant',
          default: [],
        }),
      },
    }),
    toc: group({
      title: 'Table of contents',
      description: 'TOC configuration.',
      icon: 'i-mdi-table-of-contents',
      fields: {
        title: field({
          type: 'string',
          title: 'Title',
          description: 'Text to display as title of the main toc.',
          icon: 'i-mdi-format-title',
          default: '',
        }),
        bottom: group({
          title: 'Bottom',
          description: 'Bottom TOC configuration.',
          icon: 'i-mdi-table-of-contents',
          fields: {
            title: field({
              type: 'string',
              title: 'Title',
              description: 'Text to display as title of the bottom toc.',
              icon: 'i-mdi-format-title',
              default: '',
            }),
            edit: field({
              type: 'string',
              title: 'Edit Page Link',
              description: 'URL of your repository content folder.',
              icon: 'i-ph-note-pencil',
              default: '',
            }),
            links: field({
              type: 'array',
              title: 'Links',
              description: 'Array of link object displayed in bottom toc.',
              icon: 'i-mdi-link-variant',
              default: [],
            }),
          },
        }),
      },
    }),
  },
})

declare module '@nuxt/schema' {
  interface CustomAppConfig {
    general: {
      email: string
      github: string
      linkedin: string
      twitter: string
      bluesky: string
    }
    seo: {
      siteName: string
      tagline: string
    }
    tils: {
      numOfArticles: number
    }
  }
}
