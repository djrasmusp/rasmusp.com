<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string
    description?: string
    tags?: string[]
  }>(),
  {
    title: 'title',
  }
)
</script>

<template>
  <div
    class="flex h-full w-full items-start justify-start border-12 border-indigo-500 bg-indigo-50/30"
    style="font-family: 'Geist+Mono'"
  >
    <div class="flex h-full w-full p-12 flex col justify-center">
      <ol
        v-if="tags"
        class="flex gap-x-8 text-xs font-medium content-end md:justify-end self-end md:self-auto order-first md:order-last mb-12 md:mb-auto text-indigo-500"
      >
        <li
          v-for="tag in tags"
          :key="tag"
          class="bg-indigo-200/30 rounded-md tracking-widest px-2 py-1 text-2xl font-bold text-indigo-500"
        >
          {{ tag }}
        </li>
      </ol>
      <h1 class="text-left font-black text-[80px] text-neutral-900">
        {{ title }}
      </h1>
      <p
        class="max-w-[80%] text-[28px] leading-relaxed font-normal line-clamp-3 text-neutral-700"
      >
        {{ description }}
      </p>
    </div>
  </div>
</template>
