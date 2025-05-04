<script lang="ts" setup>
/* eslint-disable vue/no-multiple-template-root */
const route = useRoute()
const { data: page } = await useAsyncData(`page-${route.path}`, () => {
  return queryCollection('content').path(route.path).first()
})

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Not Found',
  })
}

defineOgImageComponent('TILS', {
  title: page.value?.title,
  description: page.value?.description,
})

useHead(page.value?.head || {}) // <-- Nuxt Schema.org
useSeoMeta(page.value?.seo || {})
</script>

<template>
  <template v-if="page">
    <ContentRenderer :value="page" />
  </template>
</template>
