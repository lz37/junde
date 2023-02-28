import { PropType } from 'vue'
import Background from '../Background'
import style from './style.module.css'

export default defineComponent({
  props: {
    title: { type: String, required: true },
    contents: {
      type: Array as PropType<{ title?: string; content: JSX.Element }[]>,
      required: true
    }
  },
  setup(props) {
    return () => (
      <Background mode="none">
        <div class={style.title}>{props.title}</div>
        {props.contents.map((content) => (
          <>
            {content.title && <div class={style.subTitle}>{content.title}</div>}
            <div class={style.content}>{content.content}</div>
          </>
        ))}
      </Background>
    )
  }
})
