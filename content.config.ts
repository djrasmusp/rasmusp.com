import { defineContentConfig, defineCollection, z } from '@nuxt/content'
import { asSeoCollection } from '@nuxtjs/seo/content'
const skills = defineCollection({
  type: 'data',
  source: 'skills/*.yml',
  schema: z.object({
    title: z.string(),
    items: z.array(z.string()),
  }),
})

const experience = defineCollection({
  type: 'data',
  source: 'experience/*.yml',
  schema: z.object({
    title: z.string(),
    company: z.string().optional(),
    location: z.string().optional(),
    startDate: z.date(),
    endDate: z.date().optional(),
    description: z.string().optional(),
  }),
})

const tils = defineCollection(
  asSeoCollection({
    type: 'page',
    source: 'tils/*.md',
    schema: z.object({
      title: z.string(),
      date: z.date(),
      tags: z.array(z.string()),
      description: z.string().optional(),
      published: z.boolean().optional(),
    }),
  })
)

const content = defineCollection(
  asSeoCollection({
    type: 'page',
    source: {
      include: '**',
      exclude: ['data/**', 'pages/**', 'skills/**', 'experience/**', 'tils/**'],
    },
  })
)

const collections = {
  content,
  skills,
  experience,
  tils,
}

export default defineContentConfig({ collections })
