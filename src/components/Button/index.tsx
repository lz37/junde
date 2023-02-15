import { PropType, StyleValue } from 'vue'
import redStyle from './red.module.css'
import whiteStyle from './white.module.css'
import textStyle from './text.module.css'

const modeStyle = {
  red: redStyle,
  white: whiteStyle,
  text: textStyle
}

export default defineComponent({
  props: {
    mode: {
      type: String as PropType<'red' | 'white' | 'text'>,
      required: true
    },
    buttonStyle: {
      type: Object as PropType<StyleValue | undefined>
    }
  },
  emits: ['click'],
  setup(props, { emit, slots }) {
    return () => (
      <div>
        <button
          class={modeStyle[props.mode].button}
          onClick={() => emit('click')}
          style={props.buttonStyle}
        >
          <span class={modeStyle[props.mode].text}>{slots.default?.()}</span>
        </button>
      </div>
    )
  }
})
