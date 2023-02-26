import Button from '@/components/Button'
import style from './style.module.css'

export default defineComponent({
  props: {
    onClick: Function
  },
  setup(props, { slots }) {
    return () => (
      <div class={style.card}>
        <div class={style.title}>{slots.title?.()}</div>
        <div class={style.content}>{slots.content?.()}</div>
        <Button
          class={style.button}
          mode="red"
          buttonStyle={{ height: '58px' }}
          onClick={props.onClick}
        >
          {slots.buttonText?.()}
        </Button>
      </div>
    )
  }
})
