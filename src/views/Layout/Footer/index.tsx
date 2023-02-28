import { ElCol, ElPopover, ElRow } from 'element-plus'
import style from './style.module.css'
import logo from '@/assets/imgs/logo.png'
import awards1 from '@/assets/imgs/awards1.png'
import awards2 from '@/assets/imgs/awards2.png'
import social1 from '@/assets/imgs/social1.png'
import social2 from '@/assets/imgs/social2.png'
import Background from '@/components/Background'
import DForm from '@/components/DForm'
import { routerPush } from '@/router'

const skillSets = ['Ruby', 'Python', 'PHP', 'React', 'Node.js']
const locations = [
  {
    reference: 'SuZhou',
    loc: (
      <>
        10-301, Creative Industry Park, 328 Xinghu Street,
        <br /> SIP Suzhou, Jiangsu, 215123 China
      </>
    ),
    tel: <>4000-632-978</>,
    email: <>sales@jundesoftware.com</>
  },
  {
    reference: 'Beijing',
    loc: (
      <>
        Beijing Sun Flower Tower,17th Floor,37 Maizidian
        <br />
        St,Chaoyang,Beijing,China 100125
      </>
    ),
    tel: <>4000-632-978</>,
    email: <>sales@jundesoftware.com</>
  },
  {
    reference: 'Shanghai',
    loc: (
      <>
        Room 209, #5 Building, No. 1999 FengHong Road,
        <br /> Minghang District, Shanghai
      </>
    ),
    tel: <>4000-632-978</>,
    email: <>sales@jundesoftware.com</>
  }
]

export default defineComponent({
  setup() {
    return () => (
      <Background mode="dark" style={{ position: 'relative' }}>
        <ElRow>
          <ElCol span={15}>
            <div class={style.title}>Get in Touch</div>
            <div class={style.subTitle}>
              Tell us how we can assist you and one of our experienced thought
              leaders will get in touch shortly.
            </div>
            <hr
              class={style.divider}
              style={{
                marginTop: '25px',
                width: '90%',
                marginLeft: '0px'
              }}
            />
            <div class={style.tel}>Tel：4000-632-978</div>
            <div class={style.leaveMsg}>Or leave a messgae</div>
            <DForm />
          </ElCol>
          <ElCol span={2}>
            <hr class={style.dividerVertical} />
          </ElCol>
          <ElCol span={7}>
            <div class={style.holderLeft}>
              <img src={logo} alt="logo" />
              <p class={style.textLeft}>
                JUNDE provides our clients self-motivated developer to power the
                team, and be dedicated. At the same time, we create “Flat,
                Flexible, Comfortable, Target-Driven” working environment, where
                the developer can be self-managed and dedicated to work,
                manifested in the practices on “remote-working”.
              </p>
              <p class={style.textLeft}>
                JUNDE is remote-working pioneer and practitioner over 12 years.
                As a subsidiary of Shinetech, created in 2011, and has been
                serving for over 100 multi-national clients with ODC service.
              </p>
              <div class={style.skillSets}>
                <div class={style.subtitleLeft}>Skillsets we used</div>
                <p class={style.textLeft}>
                  {skillSets.map((skillSet) => (
                    <span style={{ marginRight: '20px' }}>{skillSet}</span>
                  ))}
                </p>
              </div>
            </div>
          </ElCol>
        </ElRow>
        <hr class={style.divider} style={{ marginTop: '64px' }} />
        <ElRow style={{ marginTop: '60px' }}>
          <ElCol span={8}>
            <div>
              <div class={style.footTitle}>Locations</div>
              <div class={style.footContent}>
                {locations.map((location) => (
                  <ElPopover
                    placement="top-start"
                    content="1"
                    trigger="hover"
                    width={345}
                    popperStyle={{
                      borderRadius: '15px',
                      boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.24);'
                    }}
                  >
                    {{
                      reference: (
                        <a class={style.location}>{location.reference}</a>
                      ),
                      default: (
                        <div class={style.popContainer}>
                          <div class={style.popTitle}>{location.reference}</div>
                          <div class={style.popLoc}>{location.loc}</div>
                          <div class={style.popTel}>Tel: {location.tel}</div>
                          <div class={style.popEmail}>
                            Email: {location.email}
                          </div>
                        </div>
                      )
                    }}
                  </ElPopover>
                ))}
              </div>
            </div>
          </ElCol>
          <ElCol span={6}>
            <div>
              <div class={style.footTitle}>Email</div>
              <div class={style.footContent}>jiny@shinetechchina.com</div>
            </div>
          </ElCol>
          <ElCol span={6}>
            <div>
              <div class={style.footTitle}>Awards</div>
              <div class={style.footContent}>
                <img
                  src={awards1}
                  alt="awards1"
                  style={{ marginRight: '60px' }}
                />
                <img src={awards2} alt="awards2" />
              </div>
            </div>
          </ElCol>
          <ElCol span={4}>
            <div>
              <div class={style.footTitle}>Follow Us</div>
              <div class={style.footContent}>
                <img
                  src={social1}
                  alt="social1"
                  style={{ marginRight: '20px' }}
                />
                <img src={social2} alt="social1" />
              </div>
            </div>
          </ElCol>
        </ElRow>
        <div class={style.bottom}>
          <div class={style.bottomContent}>
            © All rights reserved JUNDE Software 2023
          </div>
          <div class={style.bottomContent} style={{ float: 'right' }}>
            <span
              style={{ marginRight: '16px', cursor: 'pointer' }}
              onClick={() => {
                routerPush('/privacy-policy')
              }}
            >
              Privacy Policy
            </span>
            |
            <span
              style={{ marginLeft: '16px', cursor: 'pointer' }}
              onClick={() => {
                routerPush('/terms-of-use')
              }}
            >
              Terms of Use
            </span>
          </div>
        </div>
      </Background>
    )
  }
})
