<template>
  <el-sub-menu :index="menu.path" v-if="menu.children && menu.children.length">
    <template #title>
      <el-icon style="margin-right: 20px;">
        <component :is="menu.icon" />
      </el-icon>
      <!-- <el-icon style="margin-right: 20px;"><Menu /></el-icon> -->
      {{ menu.title }}
    </template>
    <menu-item
      v-for="subMenu in menu.children"
      :key="subMenu.path"
      :menu="subMenu" />
  </el-sub-menu>
  <el-menu-item
    v-else
    :index="menu.path"
    :key="menu.path">
    <!-- <el-icon v-show="menu?.icon">
      <component :is="menu.icon" />
    </el-icon> -->
    <el-icon>
      <component :is="menu.icon" />
    </el-icon>
    <template #title>
      {{ menu.title }}
    </template>
  </el-menu-item>
</template>
<script setup lang="ts">
import { PropType, ref } from 'vue'
// import titleIn
import { IMenu } from '@/api/types/common'
const props = defineProps({
  menu: {
    type: Object as PropType<IMenu>,
    required: true
  }
})
const menu = ref(props.menu)
</script>
