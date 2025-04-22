<script setup lang="ts">
const { data} = await useAsyncData('skills', () => {
  return queryCollection('skills').all()
})
</script>

<template>
<div>
  <div v-for="(category, index) in data" :key="category.id">
    <pre>{{ category.items }}</pre>
  </div>
</div>
</template>