import { PropType, StyleValue } from 'vue'
import style from './style.module.css'

export default defineComponent({
  props: {
    mode: {
      type: String as PropType<'light' | 'dark' | 'blue'>,
      required: true
    },
    style: Object as PropType<StyleValue>,
    class: String
  },
  setup(props, { slots }) {
    return () => (
      <div class={`${style[props.mode]} ${props.class}`} style={props.style}>
        {slots.default?.()}
      </div>
    )
  }
})
