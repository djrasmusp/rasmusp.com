import { field, group } from '@nuxt/content/preview'

export default defineAppConfig({
    appConfig: {
        parent: group({
            title: 'UI',
            description: 'UI Components',
        })
    }
})