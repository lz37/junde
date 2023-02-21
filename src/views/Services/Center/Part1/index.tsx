import style from './style.module.css'
import D from '@/assets/imgs/D.png'
import Button from '@/components/Button'
import DImage from '@/components/DImage'
import img45 from '@/assets/imgs/45.png'
export default defineComponent({
  setup() {
    return () => (
      <div
        class={style.background}
        style={{
          background: `url(${D})`,
          backgroundRepeat: 'no-repeat',
          backgroundPositionX: '85%'
        }}
      >
        <div class={style.title}>Offshore Development Center</div>
        <div class={style.subTitle}>
          ODC is designed for <b>product company</b> or{' '}
          <b>software development</b>.
        </div>
        <div class={style.buttonHolder}>
          <Button mode="red">Build Your Offshore Development Center</Button>
        </div>
        <DImage
          class={style.img1}
          forward="right"
          img={img45}
          size={{ w: '1040px', h: '440px' }}
        />
      </div>
    )
  }
})
