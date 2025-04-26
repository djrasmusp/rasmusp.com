<script setup lang="ts">
interface Props {
  item: {
    title: string
    description: string
    date: string
    tags?: string[]
    path: string
  }
}

defineProps<Props>()
</script>

<template>
  <NuxtLink :to="item.path">
    <article class="p-4 border border-dashed border-slate-200">
      <BaseH2>{{ item.title }}</BaseH2>
      <BaseDescription>{{ item.description }}</BaseDescription>
    </article>
  </NuxtLink>
</template>
