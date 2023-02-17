import style from './style.module.css'
import img1092 from '@/assets/imgs/1092.png'
import Carousel from '@/components/Carousel'

export default defineComponent({
  setup() {
    return () => (
      <div class={style.background}>
        <p class={style.text}>
          We empower our <br />
          <b>cross-all-industry clients</b>
          <br />
          with self-motivated developers for over a decade
        </p>
        <img src={img1092} alt="img 1092" class={style.img} />
        <Carousel class={style.frame} />
      </div>
    )
  }
})
