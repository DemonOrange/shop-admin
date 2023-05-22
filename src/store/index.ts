/* eslint-disabled no-unused-vars */
import { createStore, useStore as baseUserStore, type Store } from 'vuex'
// import type { Store } from 'vuex'
import type { InjectionKey } from 'vue'
import { IUserInfo, IMenu } from '@/api/types/common'
import { setItem, getItem } from '@/utils/storage'
import { USER, MENUS } from '@/utils/constance.ts'
const state = {
  isCollapse: false,
  user: getItem<{ token: string } & IUserInfo>(USER),
  menus: getItem<{ token: string } & IMenu[]>(MENUS)
}
export type State = typeof state
export const key: InjectionKey <Store<State>> = Symbol('store')
export const store = createStore<State>({
  state,
  mutations: {
    setIsCollapse (state: { isCollapse }, payload: boolean) {
      state.isCollapse = payload
    },
    setUser (state: { user }, payload) {
      state.user = payload
      setItem(USER, state.user)
    },
    setMenus (state: {menus}, payload) {
      state.menus = payload
      setItem(MENUS, state.menus)
    }
  }
})
export function useStore (): Store<State> {
  return baseUserStore(key)
}
