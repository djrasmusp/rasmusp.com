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
    <p
      class="col-span-full mt-2 block font-light text-2xs hover:text-default-dark text-right group"
    >
      See more on Linkedin
      <span
        aria-hidden="true"
        class="font-bold transition duration-300 group-hover:text-primary text-muted ml-0.5"
        >↗</span
      >
    </p>
  </div>
</template>
