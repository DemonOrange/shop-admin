<template>
  login
</template>

<script setup lang="ts">
import { getLogoInfo } from '@/api/common'
import { onMounted } from 'vue'
onMounted(() => {
  getLogoInfo().then(res => {
    console.log(res.data.data.login_logo)
  })
})
</script>

<style scoped>

</style>
