import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
  {
    name: 'home-index',
    path: '/',
    component: async () => await import('../views/home/home-index.vue')
  },
  {
    name: 'login-index',
    path: '/login',
    component: async () => await import('../views/login/login-index.vue')
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
