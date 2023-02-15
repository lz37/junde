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
    position: Object as PropType<{ x?: string; y?: string }>,
    timeout: Number
  },
  setup(props) {
    return () => (
      <div
        style={{
          backgroundImage: `url('${props.img}')`,
          backgroundPositionX: props.position?.x,
          backgroundPositionY: props.position?.y
        }}
        class={`${style.img} ${style[props.forward]}`}
      />
    )
  }
})
