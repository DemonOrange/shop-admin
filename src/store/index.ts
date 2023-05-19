/* eslint-disabled no-unused-vars */
import { createStore, useStore as baseUserStore, type Store } from 'vuex'
// import type { Store } from 'vuex'
import type { InjectionKey } from 'vue'
const state = {
  isCollapse: false
}
export type State = typeof state
export const key: InjectionKey <Store<State>> = Symbol('store')
export const store = createStore<State>({
  mutations: {
    setIsCollapse (state: { isCollapse: boolean }, payload: boolean) {
      state.isCollapse = payload
    }
  }
})
export function useStore (): Store<State> {
  return baseUserStore(key)
}
