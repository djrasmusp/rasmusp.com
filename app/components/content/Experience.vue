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
</script>

<template>
  <div class="my-8">
    <BaseH2>{{ title }}</BaseH2>
    <BaseDescription><slot mdc-unwrap="p" /></BaseDescription>
    <ExperienceList>
      <ExperienceListItem
        v-for="(item, index) in data"
        :key="index"
        :item
      />
    </ExperienceList>
  </div>
</template>
