/* eslint-disabled no-unused-vars */
import { ComponentCustomproperties } from 'vue'
import { Store } from 'vuex'
import { State } from './store/index'

interface ComponentCustomProperties {
  $store: Store<State>
}
