import Background from '@/components/Background'
import { ElCol, ElRow, ElSpace } from 'element-plus'
import style from './style.module.css'
import img15004 from '@/assets/imgs/15004.png'
import vector9 from '@/assets/imgs/Vector9.png'
import vector17 from '@/assets/imgs/Vector17.png'
import ellipse1586 from '@/assets/imgs/Ellipse1586.png'
import ellipse1587 from '@/assets/imgs/Ellipse1587.png'
import img33 from '@/assets/imgs/33.png'
import DImage from '@/components/DImage'

const leaderInfos = [
  { img: img33, name: 'Jerry Zhang', pos: 'CEO amd Founder' },
  { img: '#ffffff', name: 'Amy Ge', pos: 'Director' },
  { img: '#ffffff', name: 'Jerome Guo', pos: 'Director' },
  { img: '#ffffff', name: 'Joshua Wang', pos: 'Director' },
  { img: '#ffffff', name: 'James Simonson ', pos: 'Director' }
]

export default defineComponent({
  setup() {
    return () => (
      <Background mode="dark">
        <ElRow>
          <ElCol span={8}>
            <div class={style.title}>
              Get to know
              <br />
              <b>our leadership</b>
            </div>
            <div class={style.content}>
              Our leadership are with technical background and be practicing and
              evolving our philosophy. They enjoy and take this as a journey in
              progress: Driven by Technology, Develop for Excellence.
            </div>
            {imgs}
          </ElCol>
          <ElCol span={16}>
            <ElSpace wrap size={52}>
              {leaderInfos.map((info) => (
                <div class={style.leadCard}>
                  <DImage
                    forward="right"
                    img={info.img}
                    size={{ h: '166px', w: '172.29px' }}
                    class={style.leadImg}
                  ></DImage>
                  <div class={style.leadName}>{info.name}</div>
                  <div class={style.leadPos}>{info.pos}</div>
                </div>
              ))}
            </ElSpace>
          </ElCol>
        </ElRow>
      </Background>
    )
  }
})

const imgs = (
  <div class={style.imgs}>
    <img
      class={style.img}
      src={img15004}
      alt="img15004"
      style={{ left: '12px', top: '44.03px' }}
    />
    <img
      class={style.img}
      src={vector9}
      alt="vector9"
      style={{ left: '73px' }}
    />
    <img
      class={style.img}
      src={vector17}
      alt="vector17"
      style={{
        height: '12.66px',
        left: '12px',
        top: '45.02px',
        opacity: 0.6
      }}
    />
    <img
      class={style.img}
      src={ellipse1586}
      alt="ellipse1586"
      style={{
        left: '223px',
        top: '159.02px'
      }}
    />
    <img
      class={style.img}
      src={ellipse1587}
      alt="ellipse1587"
      style={{
        left: '223px',
        top: '73.02px'
      }}
    />
  </div>
)
