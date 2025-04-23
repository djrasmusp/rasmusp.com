<script setup lang="ts">
interface Props {
  item: {
    title: string
    company?: string
    location?: string
    startDate: Date
    endDate?: Date
  }
}

defineProps<Props>()

function getYear(date: Date | null | undefined) {
  if (!date) return 'Present'

  return new Date(date).getFullYear()
}
</script>

<template>
  <li
    class="relative inline-flex items-center font-light pl-2 gap-x-2 before:inline-block before:text-md before:h-4 before:font-bold before:text-indigo-200 text-sm"
  >
    <span class="basis-28 md:basis-32 font-light shrink-0 text-xs md:text-sm"
      >{{ getYear(item.startDate) }} - {{ getYear(item.endDate) }}</span
    >
    <div class="flex flex-wrap items-end">
      <span class="font-bold basis-full text-xs md:text-sm md:basis-auto">
        {{ item?.title }}
      </span>
      <span
        v-if="item?.company"
        class="md:before:content-[',_'] text-xs font-normal md:text-md"
        >{{ item.company }}</span
      >
      <span
        v-if="item?.location"
        class="text-[0.66rem] sm:text-md font-light pl-1 md:pl-2"
      >
        {{ item.location }}
      </span>
    </div>
  </li>
</template>
