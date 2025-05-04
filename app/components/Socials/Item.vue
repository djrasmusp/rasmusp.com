<script setup lang="ts">
defineProps<{
  url: string
  handle: string
  provider: string
}>()
</script>

<template>
  <li>
    <NuxtLink
      :to="`${url}${handle}`"
      class="flex text-sm md:text-xs group"
      target="_blank"
    >
      <span
        class="text-default group-hover:text-primary transition duration-500"
        >{{ provider }}</span
      >
      <span
        class="text-primary md:text-neutral-300 group-hover:text-primary transition duration-500"
        >/{{ handle }}</span
      >
    </NuxtLink>
  </li>
</template>
