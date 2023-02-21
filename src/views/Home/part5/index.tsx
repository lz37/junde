import Button from '@/components/Button'
import style from './style.module.css'
import vector5 from '@/assets/imgs/Vector5.png'
import vector6 from '@/assets/imgs/Vector6.png'
import ellipse10 from '@/assets/imgs/Ellipse10.png'
import ellipse11 from '@/assets/imgs/Ellipse11.png'
import Background from '@/components/Background'

const backgrounds = [
  { img: vector5, x: 88, y: 20 },
  { img: vector6, x: 95, y: 90 },
  { img: ellipse10, x: 5, y: 100 },
  { img: ellipse11, x: 0, y: 20 }
]
const imgs = backgrounds
  .map((bg) => {
    return `url('${bg.img}')`
  })
  .join(',')
const backgroundPositionX =
  backgrounds
    .map((bg) => {
      return bg.x
    })
    .join('%,') + '%'
const backgroundPositionY =
  backgrounds
    .map((bg) => {
      return bg.y
    })
    .join('%,') + '%'

export default defineComponent({
  setup() {
    return () => (
      <Background
        mode="dark"
        class={style.background}
        style={{
          background: `${imgs},linear-gradient(180deg, #405285 0%, #2b3b65 100%)`,
          backgroundRepeat: 'no-repeat',
          backgroundPositionX,
          backgroundPositionY
        }}
      >
        <div class={style.holder}>
          <div class={style.title}>
            <b>Schedule a call</b>
            <br />
            with client-success-manager to build your team
          </div>
          <div class={style.button}>
            <Button mode="red">Build your offshore development center</Button>
          </div>
        </div>
      </Background>
    )
  }
})
