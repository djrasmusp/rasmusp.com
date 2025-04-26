<script setup lang="ts">
const props = defineProps({
  code: {
    type: String,
    default: '',
  },
  language: {
    type: String,
    default: null,
  },
  filename: {
    type: String,
    default: null,
  },
  highlights: {
    type: Array as () => number[],
    default: () => [],
  },
  meta: {
    type: String,
    default: null,
  },
  class: {
    type: String,
    default: null,
  },
})

const copyState = ref(false)

async function setClipboard(text: string) {
  const type = 'text/plain'
  const blob = new Blob([text], { type })
  const data = [new ClipboardItem({ [type]: blob })]
  await navigator.clipboard.write(data)

  copyState.value = true

  setTimeout(() => {
    copyState.value = false
  }, 3000)
}

function copyCode() {
  setClipboard(props.code)
}
</script>

<template>
  <div
    class="mx-auto my-8 max-w-xl rounded-sm border border-dashed border-indigo-100 bg-indigo-50/10 px-4"
  >
    <div
      class="-mx-4 flex items-center justify-between border-b border-dashed border-indigo-100 bg-indigo-50/30 px-4 py-2 text-xs"
    >
      <span class="italic text-primary">{{ filename }}</span>
      <button
        v-if="code"
        class="rounded-sm bg-indigo-100/50 p-2 text-xs font-bold transition hover:bg-indigo-100/80 active:bg-indigo-200/60"
        :aria-label="copyState ? 'Code copied' : 'Copy code'"
        :aria-pressed="copyState"
        :class="{ 'bg-indigo-100/80': copyState }"
        @click="copyCode"
      >
        <Transition>
          <Icon
            size="12"
            :name="copyState ? 'lucide:copy-check' : 'lucide:copy'"
          />
        </Transition>
      </button>
    </div>

    <pre
      class="-mb-4 overflow-x-scroll text-xs"
      :class="$props.class"
    >
      <slot />
    </pre>
  </div>
</template>
