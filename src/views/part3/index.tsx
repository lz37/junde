import Card from '@/components/Card'
import style from './style.module.css'
import img42 from '@/assets/imgs/42.png'
import img43 from '@/assets/imgs/43.png'
import img19 from '@/assets/imgs/19.png'
import img6 from '@/assets/imgs/6.png'
import img44 from '@/assets/imgs/44.png'
import img8 from '@/assets/imgs/8.png'

export default defineComponent({
  setup() {
    return () => (
      <div class={style.background}>
        <div class={style.title1}>
          Proven approach. Build your offshore development center
        </div>
        <div class={style.title2}>
          Great collaboration leads to <b>effective solutions</b>
        </div>
        <div class={style.line1}>
          <Card img={img42}>
            {{
              title: () => (
                <div>
                  <b>Talent developers</b> are permanent in JUNDE
                </div>
              ),
              content: () => (
                <p>
                  We are not hiring agent, nor a developer’s marketplace. JUNDE
                  offers the permanent positions for all our developers. 50% of
                  them have been with us over a decade.
                </p>
              )
            }}
          </Card>
          <Card img={img43}>
            {{
              title: () => (
                <div>
                  <b>Remote working</b> pioneer and expert
                </div>
              ),
              content: () => (
                <p>
                  Remote working promotes the developers to be proactive and
                  creative in development work. We are distributed, with over
                  150 people working from 20+ cities.
                </p>
              )
            }}
          </Card>
          <Card img={img19}>
            {{
              title: () => (
                <div>
                  Our manager provides <b>customer-care service</b>
                </div>
              ),
              content: () => (
                <p>
                  Each step during the engagement, our Account Owner and Account
                  Manager stays focused on your business goal, backing you to
                  succeed with everything we’ve got.
                </p>
              )
            }}
          </Card>
        </div>
        <div class={style.line2}>
          <Card img={img6} iPosition={{ x: '-32px', y: '-16px' }}>
            {{
              title: () => (
                <div>
                  Everything is <b>fully Transparent</b> to you
                </div>
              ),
              content: () => (
                <p>
                  Transparency. You can interview our developer from the
                  beginning, we adopt your development methodologies and tools,
                  without the unnecessary administration and overhead costs.
                </p>
              )
            }}
          </Card>
          <Card img={img44}>
            {{
              title: () => (
                <div>
                  You retain <b>full ownership of IP</b> and{' '}
                  <b>invention rights</b>
                </div>
              ),
              content: () => (
                <p>
                  JUNDE does not retain any IP of the software code or creative
                  ideas. We have a long history of protecting clients from any
                  breaches in IP for 10+ years.
                </p>
              )
            }}
          </Card>
          <Card img={img8} iPosition={{ x: '-32px', y: '-16px' }}>
            {{
              title: () => (
                <div>
                  <b>1-week Risk-Free</b> for Easy Start
                </div>
              ),
              content: () => (
                <p>
                  Share with us the needs that requires further development,
                  you’ll able to try our ODC risk-free for one week to learn
                  about our working method, all before signing a contract.
                </p>
              )
            }}
          </Card>
        </div>
      </div>
    )
  }
})
