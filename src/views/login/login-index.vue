<template>
  login
</template>

<script setup lang="ts">
import { getLogoInfo } from '@/api/common'
import type { ILoginInfo } from '@/api/types/common'
import { onMounted, ref } from 'vue'
const list = ref<ILoginInfo['slide']>([])
onMounted(() => {
  console.log(import.meta.env)
  getLogoInfo().then(data => {
    console.log(data)
    list.value = data.slide
    console.log(list.value)
  })
})
</script>

<style scoped>

</style>
