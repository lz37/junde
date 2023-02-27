import style from './style.module.css'
import img14807 from '@/assets/imgs/14807.png'
import img18 from '@/assets/imgs/18.png'
import img20 from '@/assets/imgs/20.png'
import img32 from '@/assets/imgs/32.png'
import DImage from '@/components/DImage'
import DCard from '@/components/DCard'
import Button from '@/components/Button'
import { ElCol, ElMenu, ElMenuItem, ElRow } from 'element-plus'
import Background from '@/components/Background'
export default defineComponent({
  setup() {
    const activeIndex = ref('1')
    const handleSelect = (key: string, keyPath: string[]) => {
      console.log(key, keyPath)
    }
    return () => (
      <Background mode="light">
        <div class={style.title1}>Our company culture</div>
        <div class={style.title2}>
          <b>Remote working</b> practitioners. Value-driven philosophy.
        </div>
        <ElRow style={{ marginTop: '60px' }}>
          <ElCol lg={12} md={24} sm={24} xs={24}>
            <div class={style.text}>
              Self-motivated developer grows and stays in collaborative and
              inspirational working culture. <br />
              Over decade, we have been practicing the remote-working, empower
              our employee to focus the values created for clients, in a
              productively way. We have it named “Offshore Development Center”,
              which is tested and proved to be an effective approach for
              collaboration with you, then create “software with true value”
              together.
              <br /> We believe in the loyalty employee on JUNDE is as important
              as the loyalty our clients on us, we create and maintain this
              company to be:
            </div>
          </ElCol>
          <ElCol lg={12} md={0} sm={0} xs={0}>
            <img src={img14807} alt="img14807" />
          </ElCol>
        </ElRow>

        <ElMenu
          defaultActive={activeIndex.value}
          mode="horizontal"
          onSelect={handleSelect}
          class={style.menu}
        >
          <ElMenuItem index="1">
            <span class={style.menuTitle}>Integrity</span>
          </ElMenuItem>
          <ElMenuItem index="2">
            <span class={style.menuTitle}>Transparency</span>
          </ElMenuItem>
          <ElMenuItem index="3">
            <span class={style.menuTitle}>Diversity</span>
          </ElMenuItem>
          <ElMenuItem index="4">
            <span class={style.menuTitle}>People First</span>
          </ElMenuItem>
        </ElMenu>

        <div class={style.imgs}>
          <DImage
            forward="left"
            img={img18}
            size={{ h: '460px', w: '460px' }}
            class={style.img}
          />
          <DImage
            forward="right"
            img={img20}
            size={{ h: '320px', w: '362px' }}
            class={style.img}
            style={{ left: '534px' }}
          />
          <DImage
            forward="left"
            img={img32}
            size={{ h: '400px', w: '460px' }}
            class={style.img}
            style={{ left: '926px' }}
          />
        </div>
        <div class={style.andWeHave}>And we have</div>
        <div class={style.cards}>
          <DCard mode="left" class={style.card}>
            <div class={style.cardTitle}>100+</div>
            <div class={style.cardContent}>
              Clients working with us 5+ years
            </div>
          </DCard>
          <DCard mode="right" class={style.card}>
            <div class={style.cardTitle}>95%</div>
            <div class={style.cardContent}>Employees be with us 5+ years</div>
          </DCard>
          <DCard mode="left" class={style.card}>
            <div class={style.cardTitle}>150+</div>
            <div class={style.cardContent}>Remote working developers</div>
          </DCard>
          <DCard mode="right" class={style.card}>
            <div class={style.cardTitle}>0</div>
            <div class={style.cardContent}>
              Intellectual property rights dispute
            </div>
          </DCard>
        </div>
        <div class={style.question}>
          JUNDE has been running for over 12 years, would like to know further?
        </div>
        <div class={style.buttonHolder}>
          <Button mode="red" class={style.button}>
            Find More About JUNDE
          </Button>
        </div>
      </Background>
    )
  }
})
