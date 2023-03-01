import style from './style.module.css'
import img1092 from '@/assets/imgs/1092.png'
import Background from '@/components/Background'
import Buttons from './Buttons'
import DCard, { IconsTitle } from './DCard'
import { TransitionGroup } from 'vue'
import './style.css'

export interface CardInfo {
  title: IconsTitle
  info: string
}

export default defineComponent({
  setup() {
    const cardsInfos: CardInfo[] = reactive([
      {
        title: 'E-Commerce',
        info: 'BI and Data Testing, JUNDE helped target consumer and improved platform wide UX with a cross-function team of 6 self-motivated members.'
      },
      {
        title: 'Construction',
        info: 'A distributed team with 8 members covering from UI/UX to 3D design. From zero to full product launch.'
      },
      {
        title: 'Financial Platform',
        info: '1. : Maintain and enhance an existing live product to help add robustness and reliability 24x7.'
      },
      {
        title: 'Self-storage Management',
        info: 'Management efficiency improved with 5 remote-working developers.'
      },
      {
        title: 'Education',
        info: 'System used for students’ management, it is evolved agile development practices helped customized the solution for different schools. Up to 24+ education districts are using it, behind this are 4 remote-working developers.'
      },
      {
        title: 'Sports',
        info: 'Basketball Community, Racing Track, cloud based and over 5,000 registered members, 52% annual saving in development.'
      },
      {
        title: 'Engineering',
        info: 'JUNDE provided a combined and distributed development team to improved their internal processes and throughput efficiency.'
      }
    ])
    let tmpCard: CardInfo | undefined = undefined
    const moveLeft = async () => {
      const move = () => {
        if (tmpCard) {
          cardsInfos.push(tmpCard)
          tmpCard = undefined
        } else {
          tmpCard = cardsInfos.shift()
        }
      }
      move()
      //  停一秒
      await new Promise((resolve) => {
        setTimeout(resolve, 1000)
      })
      move()
    }
    const length = cardsInfos.length
    const moveRight = async () => {
      if (length !== cardsInfos.length) return
      cardsInfos.unshift(cardsInfos[cardsInfos.length - 1])
      //  停一秒
      await new Promise((resolve) => {
        setTimeout(resolve, 1000)
      })
      cardsInfos.pop()
    }
    return () => (
      <Background
        mode="blue"
        style={{ marginTop: '160px', position: 'relative' }}
      >
        <div class={style.background}>
          <div class={style.line}>
            <p class={style.text} style={{ marginTop: '13px' }}>
              We empower our <br />
              <b>cross-all-industry clients</b>
              <br />
              with self-motivated developers for over a decade
            </p>
            <img src={img1092} alt="img 1092" class={style.img} />
          </div>
        </div>
        <div class={style.frame}>
          <div style={{ position: 'relative' }}>
            <div class={style.cardsHolder}>
              <TransitionGroup tag="ul" name="carousel">
                {cardsInfos.map((cardsInfo) => (
                  <DCard
                    title={cardsInfo.title}
                    class={style.cards}
                    key={cardsInfo.title}
                  >
                    {cardsInfo.info}
                  </DCard>
                ))}
              </TransitionGroup>
            </div>
          </div>
        </div>
        <Buttons
          class={style.dCardsButtons}
          onClickLeft={() => moveRight()}
          onClickRight={() => moveLeft()}
        />
      </Background>
    )
  }
})
