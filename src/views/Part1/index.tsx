import Introduction from '@/components/Introduction'
import style from './style.module.css'
import D from '@/assets/imgs/D.png'
import img38 from '@/assets/imgs/38.png'
import img40 from '@/assets/imgs/40.png'
import DImage from '@/components/DImage'
import Trans from '@/components/Trans'

export default defineComponent({
  setup() {
    return () => (
      <div class={style.part}>
        <Trans mode="nested" class={style.introduce1}>
          <Introduction>
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
        <Trans mode="nested" class={style.introduce2}>
          <Introduction>
            {{
              title: () => (
                <>
                  Proven approach for <b>autonomous development team</b> in
                  JUNDE's ODC
                </>
              ),
              content: () => (
                <>
                  JUNDE is remote-working pioneer and all developers are
                  full-time employee working under JUNDE's circumstances.
                </>
              ),
              buttonText: () => <>Learn more about offshore development</>
            }}
          </Introduction>
        </Trans>
        <img class={style.dRight} src={D} alt="d-right" />
        <Trans timeout={1000} mode="slide-fade" class={style.img38}>
          <DImage
            img={img38}
            forward="right"
            position={{ x: '-40px' }}
            size={{ w: '557px', h: '520px' }}
          />
        </Trans>
        <img class={style.dLeft} src={D} alt="d-left" />
        <Trans timeout={1000} mode="slide-fade" class={style.img40}>
          <DImage
            img={img40}
            forward="left"
            position={{ y: '0px' }}
            size={{ w: '558px', h: '500px' }}
          />
        </Trans>
      </div>
    )
  }
})
