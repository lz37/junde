import { PropType } from 'vue'
import DImage from '@/components/DImage'
import style from './style.module.css'

export default defineComponent({
  props: {
    img: {
      type: String,
      required: true
    },
    iPosition: Object as PropType<{ x?: string; y?: string }>
  },
  setup(props, { slots }) {
    return () => (
      <div class={style.card}>
        <DImage
          forward="right"
          img={props.img}
          size={{ w: '264px', h: '168px' }}
          position={props.iPosition}
          mode="small"
        />
        <div class={style.title}>{slots.title?.()}</div>
        <div class={style.content}>{slots.content?.()}</div>
      </div>
    )
  }
})
