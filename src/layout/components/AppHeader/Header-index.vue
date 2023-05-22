<template>
  <el-space size="large">
    <ToggleSidebar />
    <BreadcrumbIndex />
  </el-space>
  <el-space size="large">
    <FullScreen />
    <UserInfo />
  </el-space>
</template>

<script lang="ts" setup>
import ToggleSidebar from './ToggleSidebar.vue'
import BreadcrumbIndex from './Breadcrumb-index.vue'
import FullScreen from './Full-Screen.vue'
import UserInfo from './User-Info.vue'
</script>

<style lang="scss" scoped>
    i {
    font-size: 19px;
    cursor: pointer;
    }
</style>
