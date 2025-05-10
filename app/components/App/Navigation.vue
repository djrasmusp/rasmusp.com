<script setup lang="ts">
const { data } = await useAsyncData('navigation', () => {
  return queryCollectionNavigation('content')
})

const showMenu = ref(false)

function toggleMenu() {
  showMenu.value = !showMenu.value
}
</script>

<template>
  <nav>
    <ul
      v-if="data"
      class="justify-end gap-x-12 hidden md:flex list-outside"
    >
      <li
        v-for="item in data"
        :key="item.path"
        class="marker:text-muted has-[a:hover]:marker:text-primary marker:transition pl-2 marker:duration-500"
      >
        <NuxtLink
          :to="item.path"
          class="flex items-center font-medium tracking-widest"
          >{{ item.title }}</NuxtLink
        >
      </li>
    </ul>
    <button
      aria-label="Show menu"
      class="font-black text-2xl leading-0 text-neutral-300 relative z-50 md:hidden"
      @click="toggleMenu"
    >
      {{ showMenu ? '=/=' : '===' }}
    </button>
    <transition>
      <ul
        v-if="showMenu"
        class="inset-0 z-20 min-h-screen absolute bg-neutral-50 md:hidden flex flex-col justify-center items-center gap-y-8"
      >
        <li
          v-for="item in data"
          :key="item.path"
        >
          <NuxtLink
            :to="item.path"
            class="flex items-center font-bold tracking-widest group text-2xl relative z-50"
            @click="showMenu = false"
          >
            {{ item.title }}
          </NuxtLink>
        </li>
      </ul>
    </transition>
  </nav>
</template>
<style scoped>
li::marker {
  font-family: var(--font-symbol);
  content: '* ';
}
</style>
