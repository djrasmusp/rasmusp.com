<template>
  <ol class="space-y-2 list-inside list-disc">
    <slot />
  </ol>
</template>
<style scoped>
:deep(li::marker) {
  font-family: var(--font-symbol);
  content: 'ᨖ ';
}
</style>
