<script lang="ts" setup>
/* eslint-disable vue/no-multiple-template-root */
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('tils').path(route.path).first()
})
</script>

<template>
  <template v-if="page">
    <ContentRenderer :value="page" />
  </template>
  <template v-else> NO FOUND </template>
</template>
