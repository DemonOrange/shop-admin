<template>
  <el-menu
    :unique-opened="false"
    :default-active="$route.path"
    class="el-menu-vertical-demo"
    background-color="#304156"
    text-color="rgba(255, 255, 255, 0.7)"
    active-text-color="#2d8cf0"
    :collapse="$store.state.isCollapse"
    router
  >
    <menu-item
      v-for="menu in $store.state.menus"
      :key="menu.path"
      :menu="menu" />
  </el-menu>
</template>

<script lang="ts" setup>
import menuItem from './menu-item.vue'
import { onMounted } from 'vue'
import { useStore } from '@/store'
const store = useStore()
onMounted(() => {
  console.log('$store.state.isCollapse: ', store)
})
</script>
<style lang="scss" scoped>
  .el-menu {
    border-right-width: 0 !important;
  }
  // .el-menu-item div {
  //   text-align: center;
  // }
  .el-menu:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
