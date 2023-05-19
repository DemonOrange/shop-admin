<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#304156"
    class="el-menu-vertical-demo"
    default-active="2"
    text-color="#fff"
    :unique-opened="true"
    :collapse="$store.state.isCollapse"
    router
  >
    <el-menu-item index="/">
      <el-icon><House /></el-icon>
      <template #title>
        <div>首页</div>
      </template>
    </el-menu-item>
    <el-sub-menu index="">
      <template #title>
        <el-icon><GoodsFilled /></el-icon>
        <span>商品</span>
      </template>
      <el-menu-item index="/product/product_list">
        <template #title>
          <div>商品列表</div>
        </template>
      </el-menu-item>
      <el-menu-item index="/product/product_classify">
        <template #title>
          <div>商品分类</div>
        </template>
      </el-menu-item>
      <el-menu-item index="/product/product_attr">
        <template #title>
          <div>商品规格</div>
        </template>
      </el-menu-item>
      <el-menu-item index="/product/product_add">
        <template #title>
          <div>商品添加</div>
        </template>
      </el-menu-item>
      <el-menu-item index="/product/product_reply">
        <template #title>
          <div>商品评论</div>
        </template>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
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
