import Background from '@/components/Background'
import style from './style.module.css'
import img1097 from '@/assets/imgs/1097.png'
import img14891 from '@/assets/imgs/14891.png'
import ellipse9 from '@/assets/imgs/Ellipse9.png'
import vector6 from '@/assets/imgs/Vector6.png'
import vector5 from '@/assets/imgs/Vector5blue.png'
import img1099 from '@/assets/imgs/1099.png'
import DCard from '@/components/DCard'

const infos = [
  {
    title: (
      <>
        <b>One quick call</b>, start building your remote team
      </>
    ),
    content: (
      <>
        Discuss your needs in a quick call or email us your needs and we will
        call you back. Start to hire the right developers, get NDA signed as per
        request.
      </>
    )
  },
  {
    title: (
      <>
        <b>Interviewing</b> or <b>code test</b>
      </>
    ),
    content: (
      <>
        We will share you our developers who are aligned with your technical
        needs and cultural ethos. You could start with video interviewing or
        trial project.
      </>
    )
  },
  {
    title: (
      <>
        <b>Soft start, risk-free</b> to onboard and meet your team
      </>
    ),
    content: (
      <>
        We provide 1-week risk-free trial for smooth onboard and you can see how
        they work and communicate with you. It can be terminated immediately if
        you’re not satisfied.
      </>
    )
  }
]

export default defineComponent({
  setup() {
    return () => (
      <Background mode="none">
        <div class={style.background}>
          <div class={style.title}>
            <b>How to start</b> building your offshore development center
          </div>
          <div class={style.content}>
            {['01', '02', '03'].map((num, index) => (
              <DCard
                mode="right"
                class={`${style.card} ${style[`card${index}`]}`}
              >
                <span class={style.cardContent}>{num}</span>
              </DCard>
            ))}
            {infos.map((info, index) => (
              <div class={`${style.info} ${style[`info${index}`]}`}>
                <div class={style.infoTitle}>{info.title}</div>
                <div class={style.infoContent}>{info.content}</div>
              </div>
            ))}
          </div>
          <div class={style.line} />
          <img class={style.img0} src={img1097} alt="img1097" />
          <img class={style.img1} src={img14891} alt="img14891" />
          <img class={style.img2} src={ellipse9} alt="ellipse9" />
          <img class={style.img3} src={vector6} alt="vector6" />
          <img class={style.img4} src={vector5} alt="vector5" />
          <img class={style.img5} src={img1099} alt="img1099" />
          <img class={style.img6} src={img1099} alt="img1099" />
        </div>
      </Background>
    )
  }
})
