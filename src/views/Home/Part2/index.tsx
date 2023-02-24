import style from './style.module.css'
import img1092 from '@/assets/imgs/1092.png'
import Carousel from './Carousel'
import { ElCol, ElRow } from 'element-plus'
import Background from '@/components/Background'

export default defineComponent({
  setup() {
    return () => (
      <Background mode="blue" class={style.background}>
        <div class={style.line}>
          <p class={style.text} style={{ marginTop: '13px' }}>
            We empower our <br />
            <b>cross-all-industry clients</b>
            <br />
            with self-motivated developers for over a decade
          </p>
          <img src={img1092} alt="img 1092" class={style.img} />
        </div>
        <Carousel class={style.frame} />
      </Background>
    )
  }
})
