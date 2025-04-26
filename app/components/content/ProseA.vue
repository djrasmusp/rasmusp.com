<script setup lang="ts">
import type { PropType } from 'vue'

const props = defineProps({
  href: {
    type: String,
    default: '',
  },
  target: {
    type: String as PropType<
      | '_blank'
      | '_parent'
      | '_self'
      | '_top'
      | (string & object)
      | null
      | undefined
    >,
    default: undefined,
    required: false,
  },
})

function startsWithHttp(url: string) {
  return url.startsWith('http://') || url.startsWith('https://')
}

const isExternal = computed(() => startsWithHttp(props.href))
</script>

<template>
  <NuxtLink
    :href="props.href"
    :target="props.target"
    class="group"
  >
    <span
      class="text-primary border-b-2 border-transparent hover:border-primary transition duration-300"
    >
      <slot />
    </span>
    <span
      v-if="isExternal"
      aria-hidden="true"
      class="font-bold transition duration-300 group-hover:text-primary text-muted ml-1"
      >↗</span
    >
  </NuxtLink>
</template>
