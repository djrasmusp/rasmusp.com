---
title: Worlds best
description: The best in the world
seo:
  title: SEO Title
  description: safasfas asf asfasfasfasfdas
navigation:
  title: About
---

::skills
Throughout my career I have worked with: 
::

::experience{title="Experience"}
Lorem **ipsum dolor** amet, consectetur adipiscing elit. `Maecenas` a [`iaculis`](/tils) nisi, sit amet congue nisi. Etiam dui eros, laoreet nec gravida et, suscipit sed massa.
::

```vue [~/components/file.vue]{12}
<script setup lang="ts">
interface Props {
  item: {
    title: string
    company?: string
    location?: string
    startDate: Date
    endDate?: Date
  }
}

defineProps<Props>()

function getYear(date: Date | null | undefined) {
  if (!date) return 'Present'

  return new Date(date).getFullYear()
}
</script>
```

adfasdf
