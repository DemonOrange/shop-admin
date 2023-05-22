<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      <span style="font-size: 18px;">{{ account }}</span>
      <el-icon style="margin-left: 5px;" size="20"><ArrowDown /></el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>
          <span style="font-size: 14px">个人中心</span>
        </el-dropdown-item>
        <el-dropdown-item @click="userLogOut">
          <span style="font-size: 14px">退出登录</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useStore } from '@/store'
import { ElMessageBox, ElMessage } from 'element-plus/es/components/index'
import { useRouter } from 'vue-router'
import { logOut } from '@/api/common.ts'

const store = useStore()
const router = useRouter()
const account = computed(() => {
  return store.state.user ? store.state.user.account : ''
})
const userLogOut = async () => {
  await ElMessageBox.confirm('确认退出吗? ', {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(() => {
    logOut().then(() => {
      store.commit('setUser', null)
      router.push({
        name: 'login-index'
      })
      ElMessage({
        type: 'success',
        message: '退出成功'
      })
    })
  }).catch(() => {
    ElMessage({
      type: 'info',
      message: '已取消退出'
    })
  })
}
</script>

<style lang="scss" scoped>
.el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>
