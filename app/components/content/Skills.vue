<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: 'Skills',
  },
  description: {
    type: String,
  },
})

const { data } = await useAsyncData('skills', () => {
  return queryCollection('skills').all()
})
</script>

<template>
  <section class="mx-auto my-16">
    <BaseH2>{{ title }}</BaseH2>
    <BaseDescription><slot mdc-unwrap="p" /></BaseDescription>
    <SkillsWrapper>
      <SkillsColumn
        v-for="category in data"
        :key="category.id"
      >
        <BaseH3>
          {{ category.title }}
          <span class="font-bold text-primary">*</span>
        </BaseH3>
        <SkillsList>
          <SkillsListItem
            v-for="(item, index) in category.items.sort()"
            :key="index"
          >
            {{ item }}
          </SkillsListItem>
        </SkillsList>
      </SkillsColumn>
    </SkillsWrapper>
    <p class="col-span-full mt-2 block font-light text-2xs md:text-right">
      <span class="font-bold text-indigo-500">*</span> Sorted alphabetically.
    </p>
  </section>
</template>
