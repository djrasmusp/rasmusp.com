<script setup lang="ts">
const { data } = await useAsyncData('experience', () =>
    queryCollection('experience').first()
)
</script>

<template>
  <div class="space-y-8">
    <h2>Experience</h2>
    <div v-for="item in data.items">
      <h3 class="text-xl font-bold mb-2">{{ item.title }}</h3>
      <span>{{ item.date }}</span>
      <span>{{ item.company }}</span>
    </div>
  </div>
</template>