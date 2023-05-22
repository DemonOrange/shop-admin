// typings.d.ts or router.ts

import 'vue-router'

declare module 'vue-router' {
  // eslint-disabled-next-line no-unused-vars
  interface RouteMeta {
    title?: string,
    requiresAuth?: boolean
  }
}
