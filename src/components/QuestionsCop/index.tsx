import { ElSpace } from 'element-plus'
import style from './style.module.css'
import img1075 from '@/assets/imgs/1075.png'
import DCard from '@/components/DCard'
import Trans from '@/components/Trans'

export default defineComponent({
  props: {
    questions: {
      type: Array as PropType<{ q: JSX.Element; a: JSX.Element }[]>,
      required: true
    }
  },
  setup(props) {
    const clicked = ref(new Array<boolean>(props.questions.length).fill(false))
    return () => (
      <ElSpace direction="vertical" fill style={{ width: '100%' }}>
        {props.questions.map(({ q, a }, i) => (
          <div class={style.item}>
            <div class={style.q}>
              <span>{q}</span>
              <DCard
                class={style.imgHolder}
                mode="right"
                onClick={() => {
                  clicked.value[i] = !clicked.value[i]
                }}
              >
                <img
                  src={img1075}
                  alt="img1063"
                  style={{
                    marginTop: '13px',
                    marginLeft: '19px',
                    transform: `rotate(${clicked.value[i] ? 180 : 0}deg)`
                  }}
                />
              </DCard>
            </div>
            {clicked.value[i] && <div class={style.a}>{a}</div>}
          </div>
        ))}
      </ElSpace>
    )
  }
})
