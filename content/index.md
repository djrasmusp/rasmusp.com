---
title: Rasmus P
description: Fullstack Developer
seo:
  title: SEO Title
navigation:
  title: About
---

::skills
Throughout my professional adventure, I've gained experience with:
::

::experience{title="Experience"}
Throughout my journey, I’ve had the opportunity to grow and contribute in various roles across different workplaces — each chapter shaping the professional I am today.
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
