import { PropType, StyleValue, Transition, TransitionGroup } from 'vue'
import DCard, { IconsTitle } from '@/components/DCard'
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
    },
    style: Object as PropType<StyleValue>,
    class: String
  },
  setup(props, { slots }) {
    const show = ref(false)
    onMounted(() => {
      setTimeout(() => {
        show.value = true
      }, props.timeout)
    })
    return () => (
      <div style={props.style} class={props.class}>
        <Transition name={props.mode}>
          {() => {
            if (show.value) {
              return <div>{slots.default?.()}</div>
            }
          }}
        </Transition>
      </div>
    )
  }
})
