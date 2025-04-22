<script setup lang="ts">
  defineProps<{
    categories: [{
      title: string,
      items: string[]
    }]
  }>()
</script>

<template>
  <div v-for="(category, index) in categories" :key="index">
    <h2>{{ category.title }}</h2>
    <div v-for="(item, index) in category.items" :key="index">
      {{ item }}
    </div>

  </div>
</template>