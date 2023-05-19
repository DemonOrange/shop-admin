<template>
  <el-icon size="20px" :color="collapseColor" @click="handleCollapse"><Operation /></el-icon>
</template>
<script setup lang="ts">
import { useStore } from '@/store'
import { computed } from 'vue'

const store = useStore()

const collapseColor = computed(() => {
  return !store.state.isCollapse ? '#409EFF' : 'unset'
})
const handleCollapse = () => {
  store.commit('setIsCollapse', !store.state.isCollapse)
}
</script>
<style scoped lang="scss">
  .headerFirst {
    display: inline-flex;
    align-items: center;
  }
</style>
