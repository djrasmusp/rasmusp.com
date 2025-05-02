<script setup lang="ts">
const { data } = await useAsyncData('navigation', () => {
  return queryCollectionNavigation('content')
})
</script>

<template>
  <nav>
    <ul
      v-if="data"
      class="flex justify-end gap-x-8"
    >
      <li
        v-for="item in data"
        :key="item.path"
      >
        <NuxtLink
          :to="item.path"
          class="flex items-center font-medium tracking-widest group"
        >
          <span
            class="mr-2 h-4 font-bold transition duration-500 text-muted group-hover:text-primary"
            aria-hidden="true"
            >*</span
          >{{ item.title }}</NuxtLink
        >
      </li>
    </ul>
  </nav>
</template>
