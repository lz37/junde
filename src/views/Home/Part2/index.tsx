import style from './style.module.css'
import img1092 from '@/assets/imgs/1092.png'
import Carousel from './Carousel'
import { ElCol, ElRow } from 'element-plus'
import NoShowMob from '@/components/NoShowMob'
import Background from '@/components/Background'

export default defineComponent({
  setup() {
    return () => (
      <Background mode="blue" class={style.background}>
        <div class={style.holder}>
          <ElRow style={{ position: 'relative', top: '147px' }}>
            <ElCol lg={12} md={24} sm={24} xs={24}>
              <p class={style.text} style={{ marginTop: '13px' }}>
                We empower our <br />
                <b>cross-all-industry clients</b>
                <br />
                with self-motivated developers for over a decade
              </p>
            </ElCol>
            <NoShowMob>
              <ElCol lg={12} md={0} sm={0} xs={0}>
                <img src={img1092} alt="img 1092" class={style.img} />
              </ElCol>
            </NoShowMob>
          </ElRow>
          <Carousel class={style.frame} />
        </div>
      </Background>
    )
  }
})
