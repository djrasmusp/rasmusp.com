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
  <li class="relative inline-flex items-center gap-x-2 pl-2 group">
    <span
      class="h-4 text-muted group-first:text-primary font-bold group-first:font-black"
      aria-hidden="true"
    >
      ﹂
    </span>
    <span class="shrink-0 basis-28 text-xs font-base md:basis-40 md:text-sm">
      {{ getYear(item.startDate) }} — {{ getYear(item.endDate) }}
    </span>
    <div class="flex flex-wrap items-end">
      <span class="basis-full text-xs font-bold text-default-dark md:text-base">
        {{ item?.title }}
      </span>
      <span
        v-if="item?.company"
        class="text-xs font-normal md:text-md"
      >
        {{ item.company }}
        <span
          v-if="item?.location"
          class="text-2xs md:text-xs font-thin"
        >
          {{ item.location }}
        </span>
      </span>
    </div>
  </li>
</template>
