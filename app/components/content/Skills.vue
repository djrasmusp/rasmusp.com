<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: 'Skills'
  },
  description: {
    type: String,
  }
})

const { data} = await useAsyncData('skills', () => {
  return queryCollection('skills').all()
})
</script>

<template>
<div class="max-w-3xl mx-auto my-8">
  <BaseH2>{{ title }}</BaseH2>
  <BaseDescription><slot mdc-unwrap="p" /></BaseDescription>
  <div class="grid grid-cols-3 border-r border-l border-dashed divide-dashed divide-x divide-indigo-100 mb-2 border-indigo-100">
    <div v-for="category in data" :key="category.id" class="border-t border-b border-dashed border-indigo-100 p-4">
      <BaseH3>{{ category.title }}</BaseH3>
      <ol class="flex flex-col space-y-2">
        <li v-for="item in category.items.sort()" class="relative flex items-center font-light gap-x-2 before:content-['*_'] before:inline-block before:text-md before:h-4 before:text-indigo-200 text-xs">{{ item }}</li>
      </ol>
    </div></div>
  <p class="text-[0.6rem] font-thin text-right block col-span-full"><span class="text-indigo-800 font-bold">*</span> Skils are sorted alphabetically.</p>

</div>
</template>