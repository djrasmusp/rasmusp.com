<script lang="ts" setup>
const slots = useSlots()

const slug = computed(() => {
  const children = slots.default?.()
  const textNode = children?.[0]?.children
  return typeof textNode === 'string' ? textNode.trim() : ''
})
</script>
<template>
  <NuxtLink
    :to="`/tils/category/${slug.toLowerCase()}`"
    class="bg-muted/30 rounded-sm tracking-wider px-1 py-0.5 text-primary"
  >
    <slot />
  </NuxtLink>
</template>
