<script lang="ts" setup>
const route = useRoute()
const { data: tils } = await useAsyncData(
  `category-tags-${route.params?.category}`,
  () => {
    return queryCollection('tils')
      .where('tags', 'LIKE', `%${route.params?.category}%`)
      .all()
  }
)

if (tils.value?.length === 0) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Not Found',
  })
}
</script>

<template>
  <TILSList>
    <TILSCard
      v-for="item in tils"
      :key="item.id"
      :item
    />
  </TILSList>
</template>
