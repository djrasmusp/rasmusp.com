<script setup lang="ts">
const { data: tags } = await useAsyncData('categories', async () => {
  const data = await queryCollection('tils').select('tags').all()

  if (!data) return []

  const tagList = data
    .filter((item) => Array.isArray(item.tags))
    .flatMap((item) => item.tags)

  return [...new Set(tagList)].sort() || []
})
</script>

<template>
  <ul>
    <li
      v-for="tag in tags"
      :key="tag"
    >
      <BaseTag>{{ tag }}</BaseTag>
    </li>
  </ul>
</template>
