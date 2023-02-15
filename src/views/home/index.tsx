import Introduction from '@/components/Introduction'
import Menu from '@/components/Menu'
import style from './style.module.css'
import DLeft from '@/assets/imgs/D-left.png'

export default defineComponent({
  setup() {
    return () => (
      <>
        <Menu />
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
        <img class={style.dLeft} src={DLeft} style={{ zIndex: 1 }} />
      </>
    )
  }
})
