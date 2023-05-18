<template>
  <el-container>
    <el-aside width="200px">
      <AppMenu />
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <router-view />
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>
<script lang="ts" setup>
import AppMenu from './components/AppMenu.vue'
</script>
<style lang="scss" scoped>
  .el-container {
      height: 100vh;
  }
  .el-aside {
    background-color: $menuBackgroundolor;
    color: #333
  }
  .el-main {
    background-color: #D3DCE6;
    color: #333;
  }
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333
  }
</style>
