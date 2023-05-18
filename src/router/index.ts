import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import AppLayout from '@/layout/AppLayout.vue'
import productRoutes from '@/router/modules/product.ts'
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
export default router
