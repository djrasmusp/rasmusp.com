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
    class="max-w-xl rounded-sm bg-indigo-50/10 px-4 pb-4 mx-auto border border-indigo-100 border-dashed shadow-xl shadow-gray-100"
  >
    <div
      class="-mx-4 px-4 items-center justify-between flex mb-4 text-xs py-4 bg-indigo-50/30 border-b border-indigo-100 border-dashed"
    >
      <span class="text-indigo-500/90 italic">{{ filename }}</span>
      <button
        v-if="code"
        class="font-bold bg-indigo-100/50 active:bg-indigo-200/60 hover:bg-indigo-100/80 rounded-sm p-2 text-xs transition"
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
      class="text-xs overflow-x-scroll"
      :class="$props.class"
    >
      <slot />
    </pre>
  </div>
</template>

<style>
pre code .line {
  display: block;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
