<script setup lang="ts">
interface Props {
  item: {
    title: string
    description: string
    date: string
    tags?: string[] | null
    path: string
  }
}

defineProps<Props>()
</script>

<template>
  <article
    class="p-4 border border-dashed border-neutral-200 hover:bg-muted/5 transition duration-300"
  >
    <div class="flex flex-col md:flex-row items-start justify-between">
      <NuxtLink
        :to="item.path"
        :title="`Read ${item.title}`"
        ><BaseH2>{{ item.title }}</BaseH2></NuxtLink
      >
      <ol
        v-if="item.tags"
        class="flex gap-x-2 text-xs font-medium content-end md:justify-end self-end md:self-auto order-first md:order-last mb-2 md:mb-auto"
      >
        <li
          v-for="tag in item.tags?.sort()"
          :key="tag"
        >
          <BaseTag>{{ tag }}</BaseTag>
        </li>
      </ol>
    </div>
    <BaseDescription>{{ item.description }}</BaseDescription>
    <NuxtLink
      :to="item.path"
      :title="`Read ${item.title}`"
      class="px-2 py-1 font-medium text-primary group"
    >
      Read more
      <span
        aria-hidden="true"
        class="text-transparent group-hover:text-primary transition duration-500"
      >
        →</span
      >
    </NuxtLink>
  </article>
</template>
