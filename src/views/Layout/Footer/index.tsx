import Button from '@/components/Button'
import {
  ElCol,
  ElDivider,
  ElForm,
  ElFormItem,
  ElInput,
  ElRow
} from 'element-plus'
import style from './style.module.css'
import logo from '@/assets/imgs/logo.png'
import awards1 from '@/assets/imgs/awards1.png'
import awards2 from '@/assets/imgs/awards2.png'
import social1 from '@/assets/imgs/social1.png'
import social2 from '@/assets/imgs/social2.png'
import Background from '@/components/Background'

const skillSets = ['Ruby', 'Python', 'PHP', 'React', 'Node.js']
export default defineComponent({
  setup() {
    const form = reactive({
      name: '',
      companyName: '',
      email: '',
      telephone: '',
      need: ''
    })
    return () => (
      <Background mode="dark">
        <div class={style.holder}>
          <ElRow>
            <ElCol span={15}>
              <div class={style.title}>Get in Touch</div>
              <div class={style.subTitle}>
                Tell us how we can assist you and one of our experienced thought
                leaders will get in touch shortly.
              </div>
              <ElDivider
                class={style.divider}
                style={{ marginTop: '25px', width: '95%' }}
              />
              <div class={style.tel}>Tel：4000-632-978</div>
              <div class={style.leaveMsg}>Or leave a messgae</div>
              <ElForm style={{ marginTop: '23px' }} ref="form" model={form}>
                <ElRow>
                  <ElCol span={11}>
                    <ElFormItem>
                      <ElInput v-model={form.name} placeholder="Name" />
                    </ElFormItem>
                    <ElFormItem>
                      <ElInput
                        v-model={form.companyName}
                        placeholder="Company Name"
                      />
                    </ElFormItem>
                    <ElFormItem>
                      <ElInput v-model={form.email} placeholder="Email" />
                    </ElFormItem>
                    <ElFormItem>
                      <ElInput
                        v-model={form.telephone}
                        placeholder="Telephone"
                      />
                    </ElFormItem>
                  </ElCol>
                  <ElCol span={1}></ElCol>
                  <ElCol span={11}>
                    <ElInput
                      type="textarea"
                      v-model={form.need}
                      placeholder="What do you need?"
                    />
                  </ElCol>
                </ElRow>
                <ElRow style={{ marginTop: '48px' }}>
                  <ElCol span={23}>
                    <Button mode="red" style={{ width: '100%' }}>
                      Send Message
                    </Button>
                  </ElCol>
                </ElRow>
              </ElForm>
            </ElCol>
            <ElCol span={2}>
              <ElDivider direction="vertical" class={style.dividerVertical} />
            </ElCol>
            <ElCol span={7}>
              <div class={style.holderLeft}>
                <img src={logo} alt="logo" />
                <p class={style.textLeft}>
                  JUNDE provides our clients self-motivated developer to power
                  the team, and be dedicated. At the same time, we create “Flat,
                  Flexible, Comfortable, Target-Driven” working environment,
                  where the developer can be self-managed and dedicated to work,
                  manifested in the practices on “remote-working”.
                </p>
                <p class={style.textLeft}>
                  JUNDE is remote-working pioneer and practitioner over 12
                  years. As a subsidiary of Shinetech, created in 2011, and has
                  been serving for over 100 multi-national clients with ODC
                  service.
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
          <ElDivider class={style.divider} style={{ marginTop: '64px' }} />
          <ElRow>
            <ElCol span={8}>
              <div>
                <div class={style.footTitle}>Locations</div>
                <div class={style.footContent}>
                  <a href="https://www.baidu.com" class={style.location}>
                    SuZhou
                  </a>
                  <a href="https://www.baidu.com" class={style.location}>
                    Beijing
                  </a>
                  <a href="https://www.baidu.com" class={style.location}>
                    Shanghai
                  </a>
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
              Privacy Policy
            </div>
          </div>
        </div>
      </Background>
    )
  }
})
