import DCard from '@/components/DCard'
import { ElSpace } from 'element-plus'
import style from './style.module.css'
import fullStackEngineers from '@/assets/imgs/Full-stack_engineers.png'
import webAndMobile from '@/assets/imgs/Web_and_mobile.png'
import businessIntelligence from '@/assets/imgs/Business_intelligence.png'
import financialAndSecurity from '@/assets/imgs/Financial_and_security.png'
import ui_ux from '@/assets/imgs/UI_UX.png'
import devOps from '@/assets/imgs/DevOps.png'
import qa_testing from '@/assets/imgs/QA_Testing.png'
import Background from '@/components/Background'
const cardsInfos = [
  {
    title: 'Full-stack engineers',
    img: fullStackEngineers,
    alt: 'fullStackEngineers',
    bg: 'rgb(225, 107, 200,0.1)'
  },
  {
    title: 'Web and mobile',
    img: webAndMobile,
    alt: 'webAndMobile',
    bg: 'rgb(243, 246, 250)'
  },
  {
    title: 'Business intelligence',
    img: businessIntelligence,
    alt: 'businessIntelligence',
    bg: 'rgb(244, 113, 18,0.1)'
  },
  {
    title: 'Financial and security',
    img: financialAndSecurity,
    alt: 'financialAndSecurity',
    bg: 'rgb(60, 173, 112,0.1)'
  },
  {
    title: ' UI/UX',
    img: ui_ux,
    alt: 'ui_ux',
    bg: 'rgb(232, 104, 90,0.1)'
  },
  {
    title: 'DevOps',
    img: devOps,
    alt: 'devOps',
    bg: 'rgb(77, 197, 223,0.1)'
  },
  {
    title: 'QA/Testing',
    img: qa_testing,
    alt: 'qa_testing',
    bg: 'rgb(198, 87, 237,0.1)'
  }
]
export default defineComponent({
  setup() {
    return () => (
      <Background mode="none">
        <div class={style.toJoin}>Pre-vetted experts. Ready to join</div>
        <div class={style.expertise}>The expertise we have us to standby</div>
        <ElSpace class={style.cards} wrap>
          {cardsInfos.map((info) => (
            <div class={style.cardHolder}>
              <DCard
                class={style.card}
                mode="right"
                style={{ background: info.bg }}
              >
                <img
                  src={info.img}
                  alt={info.alt}
                  style={{ marginTop: '20px' }}
                />
              </DCard>
              <div class={style.cardTitle}>{info.title}</div>
            </div>
          ))}
        </ElSpace>
      </Background>
    )
  }
})
