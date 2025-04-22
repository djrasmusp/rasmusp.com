<script setup lang="ts">
  defineProps<{
    categories: [{
      category: string,
      items: [{ title: string}]
    }]
  }>()
</script>

<template>
  <div v-for="(category, index) in categories" :key="index">
    <h2>{{ category.category }}</h2>
    <div v-for="(item, index) in category.items" :key="index">
      {{ item.title }}
    </div>

  </div>
</template>