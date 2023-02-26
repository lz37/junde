import Introduction from './Introduction'
import style from './style.module.css'
import D from '@/assets/imgs/D.png'
import img38 from '@/assets/imgs/38.png'
import img40 from '@/assets/imgs/40.png'
import DImage from '@/components/DImage'
import Trans from '@/components/Trans'
import Background from '@/components/Background'
import Dialog from '@/components/Dialog'

export default defineComponent({
  setup() {
    const visible = ref(false)
    return () => (
      <Background mode="none">
        <Dialog visible={visible.value} />
        <div class={style.part}>
          <img src={D} alt="d-left" class={style.dLeft} />
          <img src={D} alt="d-right" class={style.dRight} />
          <div class={style.line}>
            <Trans mode="nested" class={style.lineFirst}>
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
                      JUNDE's ODC is a tested and proven method that could speed
                      up hiring process, be your trusted and strategic software
                      development partner.
                    </>
                  ),
                  buttonText: () => <>Build your offshore development center</>
                }}
              </Introduction>
            </Trans>
            <div>
              <Trans timeout={1000} mode="slide-fade">
                <DImage
                  img={img38}
                  forward="right"
                  position={{ x: '-40px' }}
                  size={{ w: '557px', h: '520px' }}
                />
              </Trans>
            </div>
          </div>
          <div class={style.line}>
            <div class={style.lineFirst}>
              <Trans timeout={1000} mode="slide-fade">
                <DImage
                  img={img40}
                  forward="left"
                  position={{ y: '0px' }}
                  size={{ w: '558px', h: '500px' }}
                />
              </Trans>
            </div>
            <Trans mode="nested">
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
          </div>
        </div>
      </Background>
    )
  }
})
