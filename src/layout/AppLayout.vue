<template>
  <el-container>
    <el-aside>
      <AppMenu />
    </el-aside>
    <el-container>
      <el-header>
        <Appheader />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>
<script lang="ts" setup>
import AppMenu from '@/layout/components/AppMenu/AppMenu-Index.vue'
import Appheader from '@/layout/components/AppHeader/Header-index.vue'
</script>
<style lang="scss" scoped>
  .el-container {
      height: 100vh;
  }
  .el-aside {
    background-color: $menuBackgroundolor;
    width: auto;
    color: #333
  }
  .el-main {
    background-color: #D3DCE6;
    color: #333;
  }
  .el-header {
    background-color: #fff;
    color: #333;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
