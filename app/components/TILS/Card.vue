<script setup lang="ts">
interface Props {
  item: {
    title: string
    description: string
    date: string
    tags?: string[]
    path: string
  }
}

defineProps<Props>()
</script>

<template>
  <NuxtLink :to="item.path">
    <article class="p-4 border border-dashed border-slate-200">
      <div class="flex items-start justify-between">
        <BaseH2>{{ item.title }}</BaseH2>
        <ol
          v-if="item.tags"
          class="flex gap-x-2 text-xs font-medium justify-end"
        >
          <li
            v-for="tag in item.tags?.sort()"
            :key="tag"
            class="bg-muted/30 rounded-sm tracking-wider px-1 py-0.5 text-primary"
          >
            {{ tag }}
          </li>
        </ol>
      </div>
      <BaseDescription>{{ item.description }}</BaseDescription>
    </article>
  </NuxtLink>
</template>
