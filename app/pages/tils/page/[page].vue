<script lang="ts" setup>
/* eslint-disable vue/no-multiple-template-root */

const route = useRoute()
const pageNumber = Number(route.params.page || 1)

const { data: page } = await useAsyncData('page-/tils', () => {
  return queryCollection('content').path('/tils').first()
})

const { data: tils } = await useAsyncData(`tils-page-${pageNumber}`, () => {
  return queryCollection('tils')
    .limit(5)
    .skip((pageNumber - 1) * 5)
    .all()
})

defineOgImageComponent('NuxtSeo', {
  title: 'Worlds best',
  description: 'The best in the world',
  theme: '#615fff',
  colorMode: 'light',
})

useHead(page.value?.head || {}) // <-- Nuxt Schema.org
useSeoMeta(page.value?.seo || {})
</script>

<template>
  <template v-if="page">
    <ContentRenderer :value="page" />
    <pre>{{ pageNumber }}</pre>

    <pre
      v-for="item in tils"
      :key="item.id"
    >
        <NuxtLink :to="item.path">
      {{ item.id }}
      {{ item.title }}
      {{ item.description }}
      {{ item.path }}
          </NuxtLink>
    </pre>
  </template>
</template>
