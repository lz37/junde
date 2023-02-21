import { InjectionKey } from 'vue'
import { Store, useStore as baseUseStore } from 'vuex'

const { DEV } = import.meta.env

export interface State {
  isMobile: boolean
}

export const key: InjectionKey<Store<State>> = Symbol()

const store = createStore<State>({
  strict: true,
  plugins: DEV ? [createLogger()] : [],
  state: {
    isMobile: window.innerWidth < 1200
  },
  mutations: {
    setMobile(state, isMobile: boolean) {
      state.isMobile = isMobile
    }
  }
})

export default store

export function useStore() {
  return baseUseStore(key)
}
