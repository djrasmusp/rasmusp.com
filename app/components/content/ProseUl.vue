<template>
  <ul class="list-outside ml-6 marker:text-primary list-disc">
    <slot />
  </ul>
</template>
<style scoped>
:deep(li::marker) {
  font-family: var(--font-symbol);
  content: '* ';
}
</style>
