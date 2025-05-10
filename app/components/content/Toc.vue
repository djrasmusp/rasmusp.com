<script setup lang="ts">
import { useNuxtData } from '#app'

const route = useRoute()
const { data } = useNuxtData(route.path)
</script>

<template>
  <div
    class="mx-auto my-8 max-w-xl rounded-sm border border-dashed border-indigo-100 bg-indigo-50/10 p-4"
  >
    <div
      class="-mx-4 flex items-center justify-between border-b border-dashed pb-2 border-indigo-100 bg-indigo-50/30 px-4 text-xs"
    >
      <span class="font-bold text-lg">Table of contents</span>
    </div>
    <ol
      v-if="data?.body.toc?.links"
      class="mt-4 list-inside list-decimal flex flex-col gap-y-4 marker:text-default-dark"
    >
      <li
        v-for="link in data?.body?.toc?.links"
        :key="link.id"
        class="text-default-dark"
      >
        <NuxtLink :to="`#${link.id}`">
          {{ link.text }}
        </NuxtLink>
        <ol
          v-if="link?.children"
          class="list-decimal list-inside ml-4 flex flex-col gap-y-4"
        >
          <li
            v-for="child in link.children"
            :key="child.id"
            class="text-default"
          >
            <NuxtLink :to="`#${child.id}`">
              {{ child.text }}
            </NuxtLink>
          </li>
        </ol>
      </li>
    </ol>
  </div>
</template>
