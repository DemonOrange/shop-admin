<template>
  <div class="login-container">
    <el-form
      class="login-form"
      :rules="rules"
      ref="form"
      :model="user"
      size="medium"
      @submit.prevent="handleSubmit"
    >
      <div class="login-form__header">
        <img
          class="login-logo"
          src="@/assets/login_logo.png"
          alt="拉勾心选"
        >
      </div>
      <el-form-item prop="account">
        <el-input
          v-model="user.account"
          placeholder="请输入用户名"
        >
          <template #prefix>
            <i class="el-input__icon el-icon-user" />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="pwd">
        <el-input
          v-model="user.pwd"
          type="password"
          placeholder="请输入密码"
        >
          <template #prefix>
            <i class="el-input__icon el-icon-lock" />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="imgcode">
        <div class="imgcode-wrap">
          <el-input
            v-model="user.imgcode"
            placeholder="请输入验证码"
          >
            <template #prefix>
              <i class="el-input__icon el-icon-key" />
            </template>
          </el-input>
          <img
            class="imgcode"
            alt="验证码"
            :src="captchaSrc"
            @click="loadCaptcha"
          >
        </div>
      </el-form-item>
      <el-form-item>
        <el-button
          class="submit-button"
          type="primary"
          :loading="loading"
          native-type="submit"
        >
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, onMounted } from 'vue'
import { getCaptcha, login } from '@/api/common'
import { IELFORM, IRULETYPE } from '@/types/element-plus.ts'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from '@/store'

const store = useStore()
const form = ref<IELFORM | null>(null)
const router = useRouter()
const route = useRoute()
const captchaSrc = ref('')
const user = reactive({
  account: 'admin',
  pwd: '123456',
  imgcode: ''
})
const loading = ref(false)
const rules = ref<IRULETYPE>({
  account: [
    { required: true, message: '请输入账号', trigger: 'change' }
  ],
  pwd: [
    { required: true, message: '请输入密码', trigger: 'change' }
  ],
  imgcode: [
    { required: true, message: '请输入验证码', trigger: 'change' }
  ]
})
const loadCaptcha = async () => {
  const data = await getCaptcha()
  captchaSrc.value = URL.createObjectURL(data)
}
onMounted(() => {
  loadCaptcha()
})
const handleSubmit = async () => {
  // 表单验证
  const valid = await form.value?.validate()
  if (!valid) {
    return false
  }
  loading.value = true
  await login(user).then(data => {
    store.commit('setUser', {
      ...data.user_info,
      token: data.token
    })
    const meuns = data.menus
    meuns[0].icon = 'HomeFilled'
    meuns[1].icon = 'Shop'
    meuns[2].icon = 'GoodsFilled'
    meuns[3].icon = 'UserFilled'
    meuns[4].icon = 'Ticket'
    meuns[5].icon = 'Comment'
    meuns[6].icon = 'TrendCharts'
    meuns[7].icon = 'Histogram'
    meuns[8].icon = 'Grid'
    meuns[9].icon = 'Tools'
    meuns[10].icon = 'Platform'
    meuns[11].icon = 'WarningFilled'
    store.commit('setMenus', meuns)
    let redirect = route.query.redirect || '/'
    if (typeof redirect !== 'string') {
      redirect = '/'
    }
    router.replace(redirect)
    return data
  }).finally(() => {
    loading.value = false
  }).catch(() => {
    loadCaptcha()
  })
}

</script>

<style lang="scss" scoped>
.login-container {
  min-width: 400px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2d3a4b;
}

.login-form {
  padding: 30px;
  border-radius: 6px;
  background: #fff;
  min-width: 350px;
  .login-form__header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 30px;
  }

  .el-form-item:last-child {
    margin-bottom: 0;
  }

  .login__form-title {
    display: flex;
    justify-content: center;
    color: #fff;
  }

  .submit-button {
    width: 100%;
  }

  .login-logo {
    width: 271px;
    height: 74px;
  }
  .imgcode-wrap {
    display: flex;
    align-items: center;
    width: 100%;
    .imgcode {
      height: 37px;
      cursor: pointer;
    }
  }
}
</style>
