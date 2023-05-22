import productRoutes from '@/router/modules/product.ts'
import permissionRoutes from '@/router/modules/setting'
export const initRoutes = [
  {
    name: 'home-index',
    path: '/',
    meta: {
      requiresAuth: true,
      title: '首页',
      icon: 'HomeFilled'
    },
    component: async () => await import('@/views/home/home-index.vue')
  },
  productRoutes,
  permissionRoutes
]
