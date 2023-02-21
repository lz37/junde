import { PropType, StyleValue } from 'vue'
import style from './style.module.css'

export default defineComponent({
  props: {
    mode: {
      type: String as PropType<'left' | 'right'>,
      required: true
    },
    class: String,
    style: Object as PropType<StyleValue>
  },
  setup(props, { slots }) {
    return () => (
      <div class={`${style[props.mode]} ${props.class}`} style={props.style}>
        {slots.default?.()}
      </div>
    )
  }
})
