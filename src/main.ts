import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { store, key } from './store'
import './styles/index.scss'
import elementPlus from './plugins/element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app
  .use(router)
  .use(store, key)
  .use(elementPlus)
  .mount('#app')
router.beforeEach((to, from) => {
  nprogress.start() // 开始加载进度条
})

router.afterEach(() => {
  nprogress.done() // 加载进度条
})
