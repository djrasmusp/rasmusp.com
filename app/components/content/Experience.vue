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

const { general } = useAppConfig()
</script>

<template>
  <section class="my-16">
    <BaseH2>{{ title }}</BaseH2>
    <BaseDescription><slot mdc-unwrap="p" /></BaseDescription>
    <ExperienceList>
      <ExperienceListItem
        v-for="(item, index) in data"
        :key="index"
        :item
      />
    </ExperienceList>
    <div class="col-span-full flex mt-4 md:mt-2 md:flex-col-reverse">
      <NuxtLink
        target="_blank"
        :to="`https://linkedin.com/in/${general.linkedin}`"
        class="font-light text-2xs hover:text-primary text-right group transition duration-300"
      >
        See more on Linkedin
        <span
          aria-hidden="true"
          class="font-bold transition duration-500 group-hover:text-primary text-muted ml-0.5"
          >↗</span
        >
      </NuxtLink>
    </div>
  </section>
</template>
