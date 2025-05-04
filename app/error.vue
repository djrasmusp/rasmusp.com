<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps({
  error: Object as () => NuxtError
})
</script>
<template>
  <NuxtLayout>
    <div v-if="error?.statusCode === 500" class="flex flex-col justify-center items-center mt-16 mb-8">
    <pre class="text-neutral-300 text-xl md:text-4xl">
███████╗ ██████╗  ██████╗
██╔════╝██╔═████╗██╔═████╗
███████╗██║██╔██║██║██╔██║
╚════██║████╔╝██║████╔╝██║
███████║╚██████╔╝╚██████╔╝
╚══════╝ ╚═════╝  ╚═════╝
      </pre>
        <h1 class="text-center text-xl md:text-3xl mb-2 font-bold tracking-wide text-default-dark text-pretty">Oops! Something went wrong on our end.</h1>
        <p class="text-center max-w-[75ch] text-pretty text-sm md:text-base mx-auto">We’re fixing it as fast as we can.</p>
      </div>
    <div v-else class="flex flex-col justify-center items-center mt-16 mb-8">

    <pre class="text-neutral-300 text-xl md:text-4xl">
██╗  ██╗ ██████╗ ██╗  ██╗
██║  ██║██╔═████╗██║  ██║
███████║██║██╔██║███████║
╚════██║████╔╝██║╚════██║
     ██║╚██████╔╝     ██║
     ╚═╝ ╚═════╝      ╚═╝
      </pre>
    <h1 class="text-center text-xl md:text-3xl mb-2 font-bold tracking-wide text-default-dark text-pretty">This page is playing hide and seek!</h1>
    <p class="text-center max-w-[75ch] text-pretty text-sm md:text-base mx-auto">We couldn’t find what you were looking for.</p>
    </div>
  </NuxtLayout>
</template>