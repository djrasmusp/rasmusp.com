<template>
  <ol class="space-y-2 list-outside ml-4">
    <slot />
  </ol>
</template>
<style scoped>
:deep(li::marker) {
  font-family: var(--font-symbol);
  content: '└ ';
}

:deep(li:first-of-type::marker) {
  content: '┗ ';
}
</style>
