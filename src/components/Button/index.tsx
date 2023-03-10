import { PropType, StyleValue, withModifiers } from 'vue'
import Dialog from '../Dialog'
import redStyle from './red.module.css'
import whiteStyle from './white.module.css'
import style from './style.module.css'

const modeStyle = {
  red: redStyle,
  white: whiteStyle
}

export default defineComponent({
  props: {
    mode: {
      type: String as PropType<'red' | 'white'>,
      required: true
    },
    buttonStyle: Object as PropType<StyleValue | undefined>,
    onClick: Function,
    style: Object as PropType<StyleValue>
  },
  setup(props, { slots }) {
    const visible = ref(false)
    return () => (
      <div style={props.style}>
        <button
          class={`${modeStyle[props.mode].button} ${style.button}`}
          style={props.buttonStyle}
          onClick={withModifiers(() => {
            if (props.onClick) props.onClick()
            else visible.value = true
          }, ['prevent'])}
        >
          <span class={`${modeStyle[props.mode].text} ${style.text}`}>
            {slots.default?.()}
          </span>
        </button>
        <Dialog
          visible={visible.value}
          onClose={() => (visible.value = false)}
        />
      </div>
    )
  }
})
