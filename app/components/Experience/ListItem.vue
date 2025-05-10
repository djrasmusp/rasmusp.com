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
  <li class="marker:text-muted first-of-type:marker:text-primary group">
    <div class="flex flex-row items-center pl-2 gap-x-4">
      <span
        class="shrink-0 basis-28 text-xs font-base md:basis-40 md:text-sm tabular-nums"
      >
        {{ getYear(item.startDate) }} —
        <span class="group-first-of-type:font-bold">{{
          getYear(item.endDate)
        }}</span>
      </span>
      <div class="flex flex-wrap items-end">
        <span
          class="basis-full text-xs font-bold text-default-dark md:text-base"
        >
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
    </div>
  </li>
</template>
