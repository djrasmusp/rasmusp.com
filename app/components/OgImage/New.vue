<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string
    code?: string
  }>(),
  {
    title: 'title',
  }
)
</script>

<template>
  <div
    class="flex h-full w-full items-start justify-start border-solid border-blue-500 bg-gray-50 border-[12px]"
  >
    <div class="flex h-full items-start justify-start">
      <div class="flex h-full w-full flex-col justify-between">
        <h1 class="p-20 text-left font-black text-[80px]">
          {{ title }}
        </h1>
        <p class="mb-0 px-20 pb-10 text-2xl font-bold">mycoolsite.com</p>
      </div>
    </div>
  </div>
</template>
