import { PropType, StyleValue } from 'vue'
import style from './style.module.css'

export default defineComponent({
  props: {
    mode: {
      type: String as PropType<'light' | 'dark' | 'blue' | 'none'>,
      required: true
    },
    style: Object as PropType<StyleValue>,
    class: String,
    id: String
  },
  setup(props, { slots }) {
    return () => (
      <div
        class={`${style.common} ${style[props.mode]} ${props.class}`}
        style={props.style}
        id={props.id}
      >
        {slots.default?.()}
      </div>
    )
  }
})
