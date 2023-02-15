import Introduction from '@/components/Introduction'
import Menu from '@/components/Menu'
import style from './style.module.css'
import DLeft from '@/assets/imgs/D-left.png'
import img38 from '@/assets/imgs/38.png'
import DImage from '@/components/DImage'
import Trans from '@/components/Trans'

export default defineComponent({
  setup() {
    return () => (
      <>
        <Menu />
        <Trans mode="nested">
          <Introduction class={style.introduce1}>
            {{
              title: () => (
                <>
                  Scale your development team with
                  <b> self-motivated developers</b>
                </>
              ),
              content: () => (
                <>
                  JUNDE's ODC is a tested and proven method that could speed up
                  hiring process, be your trusted and strategic software
                  development partner.
                </>
              ),
              buttonText: () => <>Build your offshore development center</>
            }}
          </Introduction>
        </Trans>
        <img class={style.dLeft} src={DLeft} alt="img38" />
        <Trans timeout={1000} mode="slide-fade">
          <div>123</div>
          <DImage
            class={style.img38}
            img={img38}
            forward="left"
            position={{ x: '-40px' }}
          />
        </Trans>
      </>
    )
  }
})
