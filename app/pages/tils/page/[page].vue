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
    .limit(numOfArticles)
    .skip((currentPage - 1) * numOfArticles)
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
    <BasePagenation
      v-if="currentPage !== 1"
      class="my-4"
    />
    <div class="flex flex-col gap-y-8 my-4">
      <TILSCard
        v-for="item in tils"
        :key="item.id"
        :item
      />
    </div>
    <BasePagenation class="my-4" />
  </template>
</template>
