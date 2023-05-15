<template>
  login
</template>

<script setup lang="ts">
import { getLogoInfo } from '@/api/common'
import { onMounted } from 'vue'
onMounted(() => {
  getLogoInfo().then(res => {
    console.log(res)
  })
})
</script>

<style scoped>

</style>
