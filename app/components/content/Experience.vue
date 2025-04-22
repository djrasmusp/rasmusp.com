<script setup lang="ts">
const { data} = await useAsyncData('experience', () => {
  return queryCollection('experience').all()
})
</script>

<template>
<div>
  <pre>{{ data }}</pre>
</div>
</template>