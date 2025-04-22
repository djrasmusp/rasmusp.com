<script setup lang="ts">
const { data} = await useAsyncData('experience', () => {
  return queryCollection('experience').order('startDate', 'DESC').all()
})

function getYear(date: Date | null | undefined){
  if(!date) return 'Present';

  return new Date(date).getFullYear();
}
</script>

<template>
<div>
  <div v-for="item in data ">
    <span>{{ getYear(item.startDate)}} - {{ getYear(item.endDate) }} <strong>{{ item.title}}, {{ item.company }} - {{ item.location}}</strong></span>
  </div>
</div>
</template>