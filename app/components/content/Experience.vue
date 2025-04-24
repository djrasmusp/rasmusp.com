<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: 'Experience',
  },
  description: {
    type: String,
  },
})
const { data } = await useAsyncData('experience', () => {
  return queryCollection('experience').order('startDate', 'DESC').all()
})

function getYear(date: Date | null | undefined) {
  if (!date) return 'Present'

  return new Date(date).getFullYear()
}
</script>

<template>
  <div class="max-w-3xl mx-auto my-8">
    <BaseH2>{{ title }}</BaseH2>
    <BaseDescription><slot mdc-unwrap="p" /></BaseDescription>
    <ExperienceList>
      <ExperienceListItem
        v-for="(item, index) in data"
        :key="index"
        class="before:content-['﹂_']"
        :item
      />
    </ExperienceList>
  </div>
</template>
