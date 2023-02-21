import { PropType, StyleValue } from 'vue'
import style from './style.module.css'

export type Titles = { little: string; hug: JSX.Element }

export default defineComponent({
  props: {
    class: String,
    style: Object as PropType<StyleValue>,
    titles: { type: Object as PropType<Titles>, required: true }
  },
  setup(props) {
    return () => (
      <div class={props.class} style={props.style}>
        <div class={style.subTitle}>
          <div class={style.line} />
          {props.titles.little}
        </div>
        <div class={style.scaleYourTeam}>{props.titles.hug}</div>
      </div>
    )
  }
})
