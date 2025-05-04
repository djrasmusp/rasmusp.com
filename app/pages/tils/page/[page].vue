<script lang="ts" setup>
/* eslint-disable vue/no-multiple-template-root */

const route = useRoute()
const currentPage = Number(route.params.page || 1)

const {
  tils: { numOfArticles },
} = useAppConfig()

const { data: page } = await useAsyncData('page-/tils', () => {
  return queryCollection('content').path('/tils').first()
})

const { data: tils } = await useAsyncData(`tils-page-${currentPage}`, () => {
  return queryCollection('tils')
    .where('published', '=', true)
    .limit(numOfArticles)
    .skip((currentPage - 1) * numOfArticles)
    .all()
})

if (!page.value || tils.value?.length === 0) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Not Found',
  })
}

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
    <ContentRenderer :value="page.body" />
    <TILSList>
      <TILSCard
        v-for="item in tils"
        :key="item.id"
        :item
      />
    </TILSList>
  </template>
</template>
