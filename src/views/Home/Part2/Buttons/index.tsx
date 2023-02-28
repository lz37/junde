import img1063 from '@/assets/imgs/1063.png'
import style from './style.module.css'
export default defineComponent({
  props: {
    class: String
  },
  emits: ['clickLeft', 'clickRight'],
  setup(props, { emit }) {
    const click = reactive({ right: true, left: false })
    return () => (
      <div class={`${style.buttons} ${props.class}`}>
        <div
          class={`${style.buttonLeft} ${style.button}`}
          onClick={() => {
            click.left = true
            click.right = false
            emit('clickLeft')
          }}
        >
          <img src={img1063} alt="img1063" class={style.arrowLeft} />
        </div>
        <div
          class={`${style.buttonRight} ${style.button}`}
          onClick={() => {
            click.left = false
            click.right = true
            emit('clickRight')
          }}
        >
          <img src={img1063} alt="img1063" class={style.arrowRight} />
        </div>
      </div>
    )
  }
})
