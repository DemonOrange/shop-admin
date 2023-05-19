<template>
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item :to="{ path: '/' }">
      首页
    </el-breadcrumb-item>
    <el-breadcrumb-item
      v-for="(item, index) in breadcrumbList"
      :key="index" :to="item.meta.second ? '' : { path: item.path }">
      {{ item.meta.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts" setup>
import { ArrowRight } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import { computed } from 'vue'
const router = useRouter()
const breadcrumbList = computed(() => {
  return router.currentRoute.value.matched.filter((item) => item.meta.title)
})
</script>

<style lang="scss" scoped></style>
