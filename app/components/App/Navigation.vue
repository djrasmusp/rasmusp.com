<script setup lang="ts">
const route = useRoute()

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
      class="justify-end gap-x-8 hidden md:flex"
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
