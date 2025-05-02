<script setup lang="ts">
import {
  PaginationEllipsis,
  PaginationList,
  PaginationListItem,
  PaginationNext,
  PaginationPrev,
  PaginationRoot,
} from 'reka-ui'
import { useAsyncData } from '#app'

const route = useRoute()
const appConfig = useAppConfig()
const currentPage = Number(route.params.page || 1)
const itemPerPage = appConfig.tils?.numOfArticles ?? 10

const { data: total } = await useAsyncData('totalOfTILs', () => {
  return queryCollection('tils').count()
})

function handleNavigation(value: number) {
  navigateTo({
    name: 'tils-page-page',
    params: { page: value },
  })
}
</script>

<template>
  <PaginationRoot
    v-if="total > itemPerPage"
    :total="total"
    :sibling-count="1"
    :items-per-page="itemPerPage"
    show-edges
    :default-page="currentPage"
    @update:page="handleNavigation"
  >
    <PaginationList
      v-slot="{ items }"
      class="flex gap-x-4 text-sm justify-between"
    >
      <PaginationPrev
        class="disabled:text-neutral-400 not-disabled:cursor-pointer h-4 min-w-4"
        ><span class="font-black">‹</span> Prev</PaginationPrev
      >
      <div class="md:inline-flex gap-x-4 hidden">
        <template v-for="(page, index) in items">
          <PaginationListItem
            v-if="page.type === 'page'"
            :key="index"
            :value="page.value"
            class="tabular-nums data-[selected=true]:text-primary data-[selected=true]:font-bold cursor-pointer h-4 min-w-4"
          >
            {{ page.value }}
          </PaginationListItem>
          <PaginationEllipsis
            v-else
            :key="page.type"
            :index="index"
            class="font-medium"
          >
            …
          </PaginationEllipsis>
        </template>
      </div>
      <div class="inline-flex gap-x-4 md:hidden">
        <span class="tabular-nums text-primary font-bold h-4 min-w-4">
          {{ currentPage }}
        </span>
        /
        <span class="tabular-nums text-default font-bold h-4 min-w-4">
          {{ Math.ceil(total / appConfig.tils.numOfArticles) }}
        </span>
      </div>
      <PaginationNext
        class="disabled:text-neutral-200 not-disabled:cursor-pointer h-4 min-w-4"
        >Next <span class="font-black">›</span></PaginationNext
      >
    </PaginationList>
  </PaginationRoot>
</template>
