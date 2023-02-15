import { Transition } from 'vue'
import './trans.css'

export default defineComponent({
  props: {
    timeout: {
      type: Number,
      default: 1000
    },
    mode: {
      type: String as PropType<'slide-fade' | 'nested'>,
      required: true
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
      <Transition name={props.mode}>
        {() => {
          if (show.value) {
            return <div>{slots.default?.()}</div>
          }
        }}
      </Transition>
    )
  }
})
