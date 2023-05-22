import { App } from 'vue'
import Component from './appIcon-index.vue'

export default {
  install (app: App) {
    app.component('AppIcon', Component)
  }
}
