<script setup lang="ts">
import { computed, useRuntimeConfig } from '#imports'

const props = defineProps<{ id?: string }>()

const { headings } = useRuntimeConfig().public.mdc
const generate = computed(
  () =>
    props.id &&
    ((typeof headings?.anchorLinks === 'boolean' &&
      headings?.anchorLinks === true) ||
      (typeof headings?.anchorLinks === 'object' && headings?.anchorLinks?.h1))
)
</script>
<template>
  <h2
    :id="props.id"
    class="mb-2 text-3xl font-bold tracking-wide scroll-mt-8 text-default-dark text-pretty md:tracking-widest"
  >
    <a
      v-if="generate"
      :href="`#${props.id}`"
    >
      fasdf
      <slot />
    </a>
    <slot v-else />
  </h2>
</template>
