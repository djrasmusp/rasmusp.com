<script setup lang="ts">
const { data } = await useAsyncData('skills', () =>
    queryCollection('skills').first()
)
</script>

<template>
  <div class="space-y-8">
    <div v-for="group in data.items" :key="group.category">
      <h2 class="text-xl font-bold mb-2">{{ group.category }}</h2>
      <ul class="flex">
        <li v-for="item in group.items" :key="item.title" style="list-style: none">{{ item.title }}
        </li>
      </ul>
    </div>
  </div>
</template>