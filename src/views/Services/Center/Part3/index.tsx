import Background from '@/components/Background'
import CArds, { CardsInfo3 } from '../CArds'
import style from './style.module.css'
import img14972 from '@/assets/imgs/14972.png'

const cardsInfos: CardsInfo3 = [
  {
    title: (
      <>
        Experienced in <b>remote-working</b>
      </>
    ),
    content: (
      <>
        JUNDE has served over 100 clients through ODC remotely. We know how to
        use different tools to setup the seamless communication and make the
        work productive.
      </>
    ),
    forward: 'right'
  },
  {
    title: (
      <>
        Dedicated <b>team structure</b> and <b>collaboration process</b>
      </>
    ),
    content: (
      <>
        We can customize this for each client and guide the team to be always
        focusing on the business needs, also have the service process more
        adaptable to your situation.
      </>
    ),
    forward: 'left'
  },
  {
    title: (
      <>
        Up-to-date <b>technologies</b> and <b>skills</b>
      </>
    ),
    content: (
      <>
        Maintains a pool of experts with average 5+ years’ experience and
        up-to-date technologies, which provides the flexibility for potential
        scale up of the team.
      </>
    ),
    forward: 'right'
  }
]

export default defineComponent({
  setup() {
    return () => (
      <Background mode="blue">
        <div class={style.title}>
          Besides the developer talents and their working method,
        </div>
        <div class={style.subTitle}>
          What makes the <b>ODC in JUNDE</b> is working includes:
        </div>
        <CArds img={img14972} cardsInfos={cardsInfos} class={style.cards} />
      </Background>
    )
  }
})
