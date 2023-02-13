import { InjectionKey } from 'vue'
import { Store, useStore as baseUseStore } from 'vuex'

const { DEV } = import.meta.env

export interface State {
  count: number
}

export const key: InjectionKey<Store<State>> = Symbol()

const store = createStore<State>({
  strict: true,
  plugins: DEV ? [createLogger()] : [],
  state: {
    count: 0
  },
  mutations: {}
})

export default store

export function useStore() {
  return baseUseStore(key)
}
