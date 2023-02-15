import Button from '@/components/Button'
import Trans from '@/components/Trans'
import style from './style.module.css'

export default defineComponent({
  props: {
    timeout: Number
  },
  setup(props, { slots }) {
    return () => (
      <div>
        <Trans timeout={props.timeout}>
          <div class={style.title}>{slots.title?.()}</div>
          <div class={style.content}>{slots.content?.()}</div>
          <Button
            class={style.button}
            mode="red"
            buttonStyle={{ height: '58px' }}
          >
            {slots.buttonText?.()}
          </Button>
        </Trans>
      </div>
    )
  }
})
