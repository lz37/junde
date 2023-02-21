import DCard from '@/components/DCard'
import { PropType, StyleValue } from 'vue'
import style from './style.module.css'

type CardInfo = {
  title: JSX.Element
  content: JSX.Element
  forward: 'left' | 'right'
}

export type CardsInfo3 = [CardInfo, CardInfo, CardInfo]
export type CardsInfo2 = [CardInfo, CardInfo]

export default defineComponent({
  props: {
    cardsInfos: {
      type: Array as unknown as PropType<CardsInfo3 | CardsInfo2>,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    class: String,
    style: Object as PropType<StyleValue>
  },
  setup(props) {
    return () => (
      <div class={props.class} style={props.style}>
        <div class={style.line1}>
          <DCard mode={props.cardsInfos[0].forward} class={style.card}>
            <div class={style.cardTitle}>{props.cardsInfos[0].title}</div>
            <div class={style.cardContent}>{props.cardsInfos[0].content}</div>
          </DCard>
          <DCard
            mode={props.cardsInfos[1].forward}
            class={style.card}
            style={{ marginLeft: '30px' }}
          >
            <div class={style.cardTitle}>{props.cardsInfos[1].title}</div>
            <div class={style.cardContent}>{props.cardsInfos[1].content}</div>
          </DCard>
        </div>
        <div class={style.line2}>
          {props.cardsInfos.length === 3 && (
            <DCard mode={props.cardsInfos[2].forward} class={style.card}>
              <div class={style.cardTitle}>{props.cardsInfos[2].title}</div>
              <div class={style.cardContent}>{props.cardsInfos[2].content}</div>
            </DCard>
          )}
          <img
            src={props.img}
            alt={props.img}
            class={props.cardsInfos.length === 3 ? style.img : style.hugImg}
          />
        </div>
      </div>
    )
  }
})
