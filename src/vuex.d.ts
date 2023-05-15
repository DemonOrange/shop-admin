/* eslint-disabled no-unused-vars */
import { ComponentCustomproperties } from 'vue'
import { Store } from 'vuex'
import { State } from './store/index'

declare module 'vue' {
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
