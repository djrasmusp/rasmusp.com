<script lang="ts" setup>
/* eslint-disable vue/no-multiple-template-root */

const route = useRoute()
const pageNumber = Number(route.params.page || 1)
const {
  tils: { numOfArticles },
} = useAppConfig()

const { data: page } = await useAsyncData(`page-${route.path}`, () => {
  return queryCollection('content').path(route.path).first()
})

const { data: tils } = await useAsyncData(`tils-page-${pageNumber}`, () => {
  return queryCollection('tils')
    .limit(numOfArticles)
    .skip((pageNumber - 1) * numOfArticles)
    .all()
})

defineOgImageComponent('TILS', {
  title: page.value?.title,
})

useHead(page.value?.head || {}) // <-- Nuxt Schema.org
useSeoMeta(page.value?.seo || {})
</script>

<template>
  <template v-if="page">
    <ContentRenderer :value="page" />
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
