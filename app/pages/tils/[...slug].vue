<script lang="ts" setup>
/* eslint-disable vue/no-multiple-template-root */

const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('tils')
    .path(route.path)
    .where('published', '=', true)
    .first()
})

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Not Found',
  })
}

const { data: surround } = await useAsyncData('surround', () => {
  return queryCollectionItemSurroundings('tils', route.path, {
    fields: ['title', 'description', 'tags'],
  })
})

defineOgImageComponent('TILS', {
  title: page.value?.title,
  description: page.value?.description,
  tags: page.value?.tags,
})
</script>

<template>
  <template v-if="page">
    <ContentRenderer :value="page.body" />
    <div class="flex gap-4">
      <TILSCard
        v-if="surround?.[0]"
        :item="surround?.[0]"
      />
      <TILSCard
        v-if="surround?.[1]"
        :item="surround?.[1]"
      />
    </div>
  </template>
  <template v-else> NO FOUND </template>
</template>
