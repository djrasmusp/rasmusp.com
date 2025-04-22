<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: 'Experience'
  },
  description: {
    type: String,
  }
})
const { data} = await useAsyncData('experience', () => {
  return queryCollection('experience').order('startDate', 'DESC').all()
})

function getYear(date: Date | null | undefined){
  if(!date) return 'Present';

  return new Date(date).getFullYear();
}
</script>

<template>
  <div class="max-w-3xl mx-auto my-8">
  <h2 class="mb-2 text-lg font-bold decoration-dashed">{{ title }}</h2>
    <p v-if="description" class="mb-4 text- font-light text-gray-700 text-pretty max-w-[75ch]" v-html="description" />
    <div class="mb-4 text-xs font-light text-gray-700 text-pretty max-w-[75ch]"><slot mdc-unwrap="p" /></div>
    <ul class="list-none space-y-2 flex flex-col">
  <li v-for="item in data" class="relative inline-flex items-center font-light pl-2 gap-x-2 before:content-['﹂_'] before:inline-block before:text-md before:h-4 before:font-bold before:text-indigo-200 text-sm">
    <span class="basis-32">{{ getYear(item.startDate)}} - {{ getYear(item.endDate) }}</span>
    <span><span class="font-bold">{{ item.title}}</span>{{ item?.company ? ', ' + item.company : '' }}<span class="italic text-xs font-thin">{{ item?.location ? ' - ' + item.location : ''}}</span></span>
  </li>
  </ul>
</div>
</template>