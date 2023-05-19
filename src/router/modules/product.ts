import { RouteRecordRaw, RouterView } from 'vue-router'
const routes: RouteRecordRaw = {
  name: 'product',
  path: '/product',
  component: RouterView,
  meta: {
    title: '商品',
    second: true
  },
  children: [
    {
      name: 'product_list',
      path: 'product_list',
      component: async () => await import('@/views/product/list/list-index.vue'),
      meta: {
        title: '商品列表'
      }
    },
    {
      path: 'product_add',
      name: 'product_add',
      component: async () => await import('@/views/product/add/add-index.vue'),
      meta: {
        title: '商品添加'
      }
    },
    {
      path: 'product_attr',
      name: 'product-attr',
      component: async () => await import('@/views/product/attr/attr-index.vue'),
      meta: {
        title: '商品规格'
      }
    },
    {
      path: 'product_classify',
      name: 'product-classify',
      component: async () => await import('@/views/product/classify/classify-index.vue'),
      meta: {
        title: '商品分类'
      }
    },
    {
      path: 'product_reply',
      name: 'product-reply',
      component: async () => await import('@/views/product/reply/reply-index.vue'),
      meta: {
        title: '商品评论'
      }
    }
  ]
}
export default routes
