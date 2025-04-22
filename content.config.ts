import { defineContentConfig, defineCollection, z } from '@nuxt/content'
const skills = defineCollection({
    type: "data",
    source: 'Skills/*.yml',
    schema: z.object({
        title: z.string(),
        items: z.array(z.string())
    })
})

const experience = defineCollection({
    type: 'data',
    source: 'data/experience.yml',
    schema: z.object({
        items: z.array(z.object({
            title: z.string(),
            company: z.string().optional(),
            location: z.string().optional(),
            date: z.string(),
            description: z.string().optional(),
            }
        ))
        }
    )
})

const content = defineCollection({
    type: 'page',
    source: {
        include: '**',
        exclude: [
            'data/**',
            'pages/**', 'Skills/**',
        ],
    },
    schema: z.object({
        date: z.date(),
        rawbody: z.string(),
    }),
})

const collections = {
    content, skills, experience
}

export default defineContentConfig({ collections })

