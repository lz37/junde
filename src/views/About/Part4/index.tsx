import Background from '@/components/Background'
import LocCard from '@/components/LocCard'
import style from './style.module.css'
import img15 from '@/assets/imgs/15.png'
import img16 from '@/assets/imgs/16.png'
import img17 from '@/assets/imgs/17.png'
import { ElSpace } from 'element-plus'

const locInfos = [
  {
    title: 'Suzhou',
    location:
      '10-301, Creative Industry Park, 328 Xinghu Street, SIP Suzhou, Jiangsu, 215123 China',
    tel: '4000-632-978',
    email: 'sales@jundesoftware.com',
    img: img15
  },
  {
    title: 'Shanghai',
    location:
      'Beijing Sun Flower Tower,17th Floor,37 Maizidian St,Chaoyang,Beijing,China 100125',
    tel: '4000-632-978',
    email: 'sales@jundesoftware.com',
    img: img16
  },
  {
    title: 'Beijing',
    location:
      'Beijing Sun Flower Tower,17th Floor,37 Maizidian St,Chaoyang,Beijing,China 100125',
    tel: '4000-632-978',
    email: 'sales@jundesoftware.com',
    img: img17
  }
]

export default defineComponent({
  setup() {
    return () => (
      <Background mode="none">
        <div class={style.title}>Our location</div>
        <div class={style.subTitle}>
          Our developers are across China and be well connected in our
          remote-working community. We have 3 workplaces in
        </div>
        <ElSpace direction="vertical" class={style.holder} size={30}>
          {locInfos.map((locInfo) => (
            <LocCard
              title={locInfo.title}
              email={locInfo.email}
              img={locInfo.img}
              location={locInfo.location}
              tel={locInfo.tel}
            />
          ))}
        </ElSpace>
      </Background>
    )
  }
})
