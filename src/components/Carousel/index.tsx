import DCard, { IconsTitle } from '@/components/DCard'
import { TransitionGroup } from 'vue'
import './style.css'

// @todo 使用transition每次在首位删除再在结尾插入
export default defineComponent({
  setup() {
    const cardsInfos: { title: IconsTitle }[] = reactive([
      { title: 'E-Commerce' },
      { title: 'Construction' },
      { title: 'Financial Platform' },
      { title: 'Self-storage Management' },
      { title: 'Education' },
      { title: 'Sports' },
      { title: 'Engineering' }
    ])
    let tmpCard: { title: IconsTitle } | undefined = undefined
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
          <DCard title={cardsInfo.title} class="cards" key={cardsInfo.title} />
        ))}
      </TransitionGroup>
    )
  }
})
