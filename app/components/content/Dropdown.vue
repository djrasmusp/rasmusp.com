<script setup lang="ts">
defineProps({
  items: {
    type: Array,
  }
})
</script>

<template>
<div>
  <ul>
    <li v-for="(item, i) in items" :key="i">{{ item }}</li>
  </ul>
</div>
</template>