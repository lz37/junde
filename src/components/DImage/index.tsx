import style from './style.module.css'
export default defineComponent({
  props: {
    img: {
      type: String,
      required: true
    },
    forward: {
      type: String as PropType<'left' | 'right'>,
      required: true
    },
    size: {
      type: Object as PropType<{ w: string; h: string }>,
      required: true
    },
    position: Object as PropType<{ x?: string; y?: string }>
  },
  setup(props) {
    return () => (
      <div
        style={{
          backgroundImage: `url('${props.img}')`,
          backgroundPositionX: props.position?.x,
          backgroundPositionY: props.position?.y,
          width: props.size.w,
          height: props.size.h
        }}
        class={`${style.img} ${style[props.forward]}`}
      />
    )
  }
})
