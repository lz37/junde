import Background from '@/components/Background'
import style from './style.module.css'
import Text from './Text'
import img46 from '@/assets/imgs/46.png'
import img47 from '@/assets/imgs/47.png'
import DImage from '@/components/DImage'
import D from '@/assets/imgs/D.png'

const infos = [
  {
    title: <>Remote working expert</>,
    content: (
      <>
        We understand the importance how an individual plays in a productive
        software development team. It requires a comfortable working environment
        with clear goals, which inspires individual to be self-managed and
        contribute to the team with values. Over decades, we have been
        practicing in the remote-working scenario, empower our talents to
        productively focus values created by their work. We have it named
        “Offshore Development Center”, a tested and proven approach for
        establishing a distributed team who are dedicated for producing
        “software with true value”.
      </>
    )
  },
  {
    title: <>Flat organizational structure</>,
    content: (
      <>
        The way we run this company is asynchronous which provides the
        flexibility for individual to manage themselves, manifested in what we
        are practicing the Agile principles and the remote-working environment.
        We reduce the organizational hierarchy to streamline the collaboration
        between team and client, so have the team members with more control on
        their work, maximized the contribution they made. The individual gets
        well-paid and can go to work in JUNDE’s offices if he/she thinks that is
        more comfortable for them.{' '}
      </>
    )
  }
]

export default defineComponent({
  setup() {
    return () => (
      <Background mode="none">
        <img src={D} alt="D-left" class={style.dLeft} />
        <img src={D} alt="D-right" class={style.dRight} />
        <div class={style.title}>
          <b>Self-motivated developers</b> requires a{' '}
          <b>collaborative working environment</b>.<br /> We are working on it.
        </div>
        <div class={style.holder1}>
          <Text info={infos[0]} style={{ marginRight: '128px', zIndex: 10 }} />
          <DImage
            forward="right"
            img={img46}
            size={{ w: '558px', h: '460px' }}
            position={{ x: '-40px' }}
          />
        </div>
        <div class={style.holder2}>
          <DImage
            forward="left"
            img={img47}
            size={{ w: '558px', h: '460px' }}
            style={{ marginRight: '128px', zIndex: 10 }}
            position={{ x: '-40px' }}
          />
          <Text info={infos[0]} />
        </div>
      </Background>
    )
  }
})
