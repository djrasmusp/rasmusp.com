<script lang="ts" setup>
const route = useRoute()
const currentPage = Number(route.params.page || 1)
</script>
<template>
  <div class="flex flex-col gap-y-8 my-8">
    <BasePagenation
      v-if="currentPage > 1"
      class="my-4"
    />
    <slot />
    <BasePagenation class="my-4" />
  </div>
</template>
