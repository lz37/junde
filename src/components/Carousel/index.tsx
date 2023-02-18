import DCard, { IconsTitle } from '@/components/DCard'
import { TransitionGroup } from 'vue'
import './style.css'

interface CardInfo {
  title: IconsTitle
  info: string
}

// @todo 使用transition每次在首位删除再在结尾插入
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
        info: 'Management efficiency improved with 5 remote-working developers.'
      },
      {
        title: 'Self-storage Management',
        info: 'System used for students’ management, it is evolved agile development practices helped customized the solution for different schools. Up to 24+ education districts are using it, behind this are 4 remote-working developers.'
      },
      {
        title: 'Education',
        info: '1. : Maintain and enhance an existing live product to help add robustness and reliability 24x7.'
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
    onMounted(() => {
      setInterval(() => {
        if (tmpCard) {
          cardsInfos.push(tmpCard)
          tmpCard = undefined
        } else {
          tmpCard = cardsInfos.shift()
        }
      }, 1000)
    })
    return () => (
      <TransitionGroup tag="ul" name="carousel">
        {cardsInfos.map((cardsInfo) => (
          <DCard title={cardsInfo.title} class="cards" key={cardsInfo.title}>
            {cardsInfo.info}
          </DCard>
        ))}
      </TransitionGroup>
    )
  }
})
