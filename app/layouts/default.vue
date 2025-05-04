<script setup lang="ts"></script>
<template>
  <div
    class="mx-auto max-w-4xl bg-indigo-50/10 px-4 py-8 text-default sm:px-6 lg:px-8 flex flex-col min-h-dvh"
  >
    <AppHeader class="flex md:items-center justify-between">
      <NuxtLink
        to="/"
        class="group relative z-50"
      >
        <span class="font-bold text-primary tracking-wider"
          >rasmusp<span
            class="font-normal text-neutral-300 group-hover:text-primary transition duration-500"
            >.com</span
          ></span
        >
      </NuxtLink>
      <AppNavigation />
    </AppHeader>
    <main class="flex-1">
      <slot />
    </main>
    <AppFooter
      class="flex flex-col md:flex-row items-center justify-between gap-8"
    >
      <span class="order-last md:order-first text-xs text-neutral-300"
        >© Rasmus P 2025.</span
      >
      <SocialsList />
    </AppFooter>
  </div>
</template>
