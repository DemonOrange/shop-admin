// typings.d.ts or router.ts

import 'vue-router'
// eslint-disabled-next-line no-unused-vars
declare module 'vue-router' {
  interface RouteMeta {
    title: string
  }
}
