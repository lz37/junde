import Icon from '@/assets/imgs/junde-icon.png'
import style from './style.module.css'
import Button from '@/components/Button'
export default defineComponent({
  setup() {
    return () => (
      <div class={style.menu}>
        <img src={Icon} class={style.icon} />
        <Button class={style.top65} style={{ marginLeft: '128px' }} mode="text">
          Home
        </Button>
        <Button class={style.top65} style={{ marginLeft: '60px' }} mode="text">
          Services
        </Button>
        <Button class={style.top65} style={{ marginLeft: '66px' }} mode="text">
          About
        </Button>
        <Button class={style.top59} style={{ marginLeft: '104px' }} mode="red">
          Get in touch
        </Button>
        <Button class={style.top59} style={{ marginLeft: '16px' }} mode="white">
          Tel:400-3444-5555
        </Button>
      </div>
    )
  }
})
