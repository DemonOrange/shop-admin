import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import AppLayout from '@/layout/AppLayout.vue'
import productRoutes from '@/router/modules/product.ts'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

const routes: RouteRecordRaw[] = [
  {
    name: '',
    path: '/',
    component: AppLayout,
    children: [
      {
        name: 'home-index',
        path: '',
        component: async () => await import('@/views/home/home-index.vue')
      },
      productRoutes
    ]
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
router.beforeEach((to, from) => {
  nprogress.start() // 开始加载进度条
})

router.afterEach(() => {
  nprogress.done() // 加载进度条
})

export default router
