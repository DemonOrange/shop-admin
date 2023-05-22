import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import AppLayout from '@/layout/AppLayout.vue'
import { initRoutes } from './init-router'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import { store } from '@/store'

const routes: RouteRecordRaw[] = [
  {
    name: '',
    path: '/',
    component: AppLayout,
    children: initRoutes
  },
  {
    name: 'login-index',
    path: '/login',
    component: async () => await import('@/views/login/login-index.vue')
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to) => {
  nprogress.start() // 开始加载进度条
  if (to.meta.requiresAuth && (!store.state.user || !store.state.user.token)) {
    return {
      path: '/login',
      query: {
        redirect: to.fullPath
      }
    }
  }
})

router.afterEach(() => {
  nprogress.done() // 加载进度条
})

export {
  router,
  routes
}
