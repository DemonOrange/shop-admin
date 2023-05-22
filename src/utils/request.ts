import axios, { AxiosRequestConfig } from 'axios'
import { ElMessage, ElMessageBox } from 'element-plus/es/components/index'
import { useRouter } from 'vue-router'
import { store } from '@/store'
const router = useRouter()
const request = axios.create({
  // baseURL: import.meta.env.VITE_API_URL
})
// 请求拦截器
request.interceptors.request.use(function (config) {
  // 统一设置用户身份 token
  const user = store.state.user
  if (user && user.token) {
    config.headers.Authorization = `Bearer ${user.token}`
  }
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

let isRefreshing = false

// 响应拦截器
request.interceptors.response.use(function (response) {
  const status = response.data.status

  // 正确的情况
  if (!status || status === 200) {
    return response
  }

  // 错误情况：比如 token 无效...

  // 统一处理登录过期
  if (status === 410000) {
    if (isRefreshing) return Promise.reject(response)
    isRefreshing = true
    ElMessageBox.confirm('您的登录已过期，您可以取消停留在此页面，或确认重新登录', '登录过期', {
      confirmButtonText: '确认',
      cancelButtonText: '取消'
    }).then(() => {
      // 清除本地过期的登录状态
      store.commit('setUser', null)
      // 跳转到登录页面
      router.push({
        name: 'login-index',
        query: {
          redirect: router.currentRoute.value.fullPath
        }
      })
      // 抛出异常
    }).finally(() => {
      isRefreshing = false
    })

    // 在内部消化掉这个业务异常
    return Promise.reject(response)
  }

  // 其它错误情况
  ElMessage.error(response.data.msg || '请求失败，请稍后重试')
  // 手动返回一个 Promise 异常
  return Promise.reject(response)
}, function (error) {
  ElMessage.error(error.message || '请求失败，请稍后重试')
  return Promise.reject(error)
})
// 封装泛型请求方法
export default <T = any> (config: AxiosRequestConfig) => {
  let requestSetting: AxiosRequestConfig = {}
  if (!config.params) {
    requestSetting = {
      params: {
        stamp: Date.now()
      },
      ...config
    }
  } else {
    requestSetting = { ...config }
    requestSetting.params.stamp = Date.now()
  }
  return request(requestSetting).then(res => {
    return (res.data.data || res.data) as T
  })
}
