import { useStore } from '@/store'
export default defineComponent({
  setup(_, { slots }) {
    const store = useStore()
    const isMobile = ref(false)
    const getIsMobile = computed(() => {
      return store.state.isMobile
    })
    watch(
      getIsMobile,
      (newVal) => {
        isMobile.value = newVal
      },
      { immediate: true, deep: true }
    )
    return () => <>{!isMobile.value && slots.default?.()}</>
  }
})
