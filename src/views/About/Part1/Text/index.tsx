import { PropType, StyleValue } from 'vue'
import style from './style.module.css'

export default defineComponent({
  props: {
    info: {
      type: Object as PropType<{ title: JSX.Element; content: JSX.Element }>,
      required: true
    },
    class: String,
    style: Object as PropType<StyleValue>
  },
  setup(props) {
    return () => (
      <div class={`${style.text} ${props.class}`} style={props.style}>
        <div class={style.title}>{props.info.title}</div>
        <div class={style.content}>{props.info.content}</div>
      </div>
    )
  }
})
