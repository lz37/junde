import { Transition } from 'vue'
import './trans.css'

export default defineComponent({
  props: {
    timeout: {
      type: Number,
      default: 1000
    }
  },
  setup(props, { slots }) {
    const show = ref(false)
    onMounted(() => {
      setTimeout(() => {
        show.value = true
      }, props.timeout)
    })
    return () => (
      <Transition name="nested">
        {() => {
          if (show.value) {
            return <div>{slots.default?.()}</div>
          }
        }}
      </Transition>
    )
  }
})
