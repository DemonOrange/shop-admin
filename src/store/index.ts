/* eslint-disabled no-unused-vars */
import { createStore, useStore as baseUserStore } from 'vuex'
import type { Store } from 'vuex'
import type { InjectionKey } from 'vue'
export interface State {
  count: number
}
export const key: InjectionKey <Store<State>> = Symbol('store')
export const store = createStore<State>({
  state () {
    return {
      count: 2
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
export function useStore (): Store<State> {
  return baseUserStore(key)
}
