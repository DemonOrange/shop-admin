<template>
  <el-space size="large">
    <ToggleSidebar />
    <BreadcrumbIndex />
  </el-space>
  <el-space size="large">
    <FullScreen />
  </el-space>
</template>

<script lang="ts" setup>
import ToggleSidebar from './ToggleSidebar.vue'
import BreadcrumbIndex from './Breadcrumb-index.vue'
import FullScreen from './Full-Screen.vue'
</script>

<style lang="scss" scoped>
    i {
    font-size: 19px;
    cursor: pointer;
    }
</style>
