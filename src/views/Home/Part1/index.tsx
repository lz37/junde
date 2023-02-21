import Introduction from './Introduction'
import style from './style.module.css'
import D from '@/assets/imgs/D.png'
import img38 from '@/assets/imgs/38.png'
import img40 from '@/assets/imgs/40.png'
import DImage from '@/components/DImage'
import Trans from '@/components/Trans'
import { ElCol, ElRow } from 'element-plus'
import NoShowMob from '@/components/NoShowMob'

export default defineComponent({
  setup() {
    return () => (
      <div
        class={style.part}
        // style={{ left: isMobile.value ? '25%' : '147px' }}
      >
        <NoShowMob>
          <Trans mode="slide-fade" class={style.dLeft}>
            <img src={D} alt="d-left" />
          </Trans>
          <Trans mode="slide-fade" class={style.dRight}>
            <img src={D} alt="d-right" />
          </Trans>
        </NoShowMob>
        <ElRow style={{ marginTop: '127px' }}>
          <ElCol lg={12} md={24} sm={24} xs={24}>
            <Trans mode="nested">
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
          </ElCol>
          <ElCol lg={12} md={0} sm={0} xs={0}>
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
          </ElCol>
        </ElRow>
        <ElRow style={{ marginTop: '120px' }}>
          <ElCol lg={12} md={0} sm={0} xs={0}>
            <div>
              <Trans timeout={1000} mode="slide-fade">
                <DImage
                  img={img40}
                  forward="left"
                  position={{ y: '0px' }}
                  size={{ w: '558px', h: '500px' }}
                />
              </Trans>
            </div>
          </ElCol>
          <ElCol lg={12} md={24} sm={24} xs={24}>
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
          </ElCol>
        </ElRow>
      </div>
    )
  }
})
