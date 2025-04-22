<template>
  <div>
    <h3>{{ title }}</h3>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: 'Default title'
  },
})
</script>
