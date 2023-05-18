import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [vue(),
      eslint({
        // 配置选项
        cache: false
      }),
      vueJsx({
        // 配置选项
      })
    ],
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src')
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/styles/variables.scss";'
        }
      }
    },
    server: {
      proxy: {
        // 字符串简写写法：http://localhost:5173/foo -> http://localhost:4567/foo
        // '/foo': 'http://localhost:4567',
        // 带选项写法：http://localhost:5173/api/bar -> http://jsonplaceholder.typicode.com/bar
        '/admin': {
          target: 'https://shop.fed.lagounews.com/api',
          changeOrigin: true
          // rewrite: (path) => path.replace(/^\/api/, '')
        }
        // 正则表达式写法：http://localhost:5173/fallback/ -> http://jsonplaceholder.typicode.com/
        // '^/fallback/.*': {
        //   target: 'http://jsonplaceholder.typicode.com',
        //   changeOrigin: true,
        //   rewrite: (path) => path.replace(/^\/fallback/, '')
        // },
        // // 使用 proxy 实例
        // // eslint-disable-next-line no-dupe-keys
        // '/api': {
        //   target: 'http://jsonplaceholder.typicode.com',
        //   changeOrigin: true,
        //   configure: (proxy, options) => {
        //     // proxy 是 'http-proxy' 的实例
        //   }
        // },
        // // 代理 websockets 或 socket.io 写法：ws://localhost:5173/socket.io -> ws://localhost:5174/socket.io
        // '/socket.io': {
        //   target: 'ws://localhost:5174',
        //   ws: true
        // }
      }
    }
  }
})
