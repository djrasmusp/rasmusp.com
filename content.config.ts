import { defineContentConfig, defineCollection, z } from '@nuxt/content'
const skills = defineCollection({
    type: "data",
    source: 'data/skills.yml',
    schema: z.object({
        items: z.array(z.object({
            category: z.string(),
            items: z.array(z.record(z.object({
                title: z.string()
            }))),
        }))
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

const collections = {
    skills, experience
}

export default defineContentConfig({ collections })

