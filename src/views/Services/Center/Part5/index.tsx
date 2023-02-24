import Background from '@/components/Background'
import Button from '@/components/Button'
import style from './style.module.css'
import ellipse1576 from '@/assets/imgs/Ellipse1576.png'
import ellipse1577 from '@/assets/imgs/Ellipse1577.png'
import vector17 from '@/assets/imgs/Vector17.png'
import vector32 from '@/assets/imgs/Vector32.png'

export default defineComponent({
  setup() {
    return () => (
      <Background mode="dark" class={style.background}>
        <div class={style.littleTitle}>
          We understand making decision is hard sometimes, so we made our
          agreements soft
        </div>
        <div class={style.title}>
          <b>We offer 2 week’s cost refund</b>
          <br /> if you think you hadn’t selected the right team
        </div>
        <Button mode="red" class={style.button}>
          Build Your Offshore Development Center
        </Button>
        <img class={style.img0} src={ellipse1576} alt="img1097" />
        <img class={style.img1} src={ellipse1577} alt="img14891" />
        <img class={style.img2} src={vector17} alt="ellipse9" />
        <img class={style.img3} src={vector32} alt="vector6" />
      </Background>
    )
  }
})
