import CArds, { CardsInfo2, CardsInfo3 } from '../CArds'
import style from './style.module.css'
import img14820 from '@/assets/imgs/14820.png'
import img14890 from '@/assets/imgs/14890.png'
import img14893 from '@/assets/imgs/14893.png'
import SubTitle, { Titles } from './SubTitle'
import Background from '@/components/Background'

const titles1: Titles = {
  little: 'Self-motivated developers',
  hug: (
    <>
      We’re ready to join to <b>scale your team</b>
    </>
  )
}

const cardInfos1: CardsInfo3 = [
  {
    title: (
      <>
        <b>Agile</b> and <b>business perspective</b> working methods
      </>
    ),
    content: (
      <>
        The developers take the business needs which is the beacon for
        development as priority, accumulate business knowledge that powers them
        to be productive.
      </>
    ),
    forward: 'right'
  },
  {
    title: <b>Oversight</b>,
    content: (
      <>
        JUNDE maintains a marketplace-like culture where self-motivated
        developers grow and stay, without hassle of career development and no
        overhead cost for you.
      </>
    ),
    forward: 'left'
  },
  {
    title: <b>Tech excellence</b>,
    content: (
      <>
        Upgrading themselves by making use of new technologies, expanding the
        possibilities for making a better software for you.
      </>
    ),
    forward: 'right'
  }
]

const titles2: Titles = {
  little: 'Dedicated Working',
  hug: (
    <>
      We <b>fully collaborate</b> with your in-house team
    </>
  )
}

const cardInfos2: CardsInfo3 = [
  {
    title: (
      <>
        <b>Full-time</b> working and be reliable
      </>
    ),
    content: (
      <>
        Every developer is fully dedicated to you and no distraction from JUNDE.
        They focus on the results rather than the hours they spend.
      </>
    ),
    forward: 'right'
  },
  {
    title: (
      <>
        Full collaboration with your <b>in-house team</b>
      </>
    ),
    content: (
      <>
        The developer plays as a part of your in-house team, integrates with
        your working culture, and grows with the team together for better
        software.
      </>
    ),
    forward: 'left'
  },
  {
    title: (
      <>
        Fully using your <b>development methodology</b>
      </>
    ),
    content: (
      <>
        The developers adopt your Agile development methodology and management
        process. Everything is totally transparent and adheres to the IP
        protection.
      </>
    ),
    forward: 'right'
  }
]

const titles3: Titles = {
  little: 'Daily basis communication',
  hug: (
    <>
      <b>Frequent organized check-in</b> during remote working
    </>
  )
}

const cardInfos3: CardsInfo2 = [
  {
    title: (
      <>
        <b>Full-time</b> working and be reliable
      </>
    ),
    content: (
      <>
        Every developer is fully dedicated to you and no distraction from JUNDE.
        They focus on the results rather than the hours they spend.
      </>
    ),
    forward: 'right'
  },
  {
    title: (
      <>
        Full collaboration with your <b>in-house team</b>
      </>
    ),
    content: (
      <>
        The developer plays as a part of your in-house team, integrates with
        your working culture, and grows with the team together for better
        software.
      </>
    ),
    forward: 'left'
  }
]

export default defineComponent({
  setup() {
    return () => (
      <Background mode="light" class={style.background}>
        <div class={style.title}>Team needs expanding</div>
        <SubTitle titles={titles1} style={{ marginTop: '80px' }} />
        <CArds
          cardsInfos={cardInfos1}
          style={{ marginTop: '60px' }}
          img={img14820}
        />
        <SubTitle titles={titles2} style={{ marginTop: '58px' }} />
        <CArds
          cardsInfos={cardInfos2}
          style={{ marginTop: '60px' }}
          img={img14890}
        />
        <SubTitle titles={titles3} style={{ marginTop: '58px' }} />
        <CArds
          cardsInfos={cardInfos3}
          style={{ marginTop: '60px' }}
          img={img14893}
        />
      </Background>
    )
  }
})
