import Icon from '@/assets/imgs/junde-icon.png'
import style from './style.module.css'
import Button from '@/components/Button'
import {
  ElAffix,
  ElCol,
  ElMenu,
  ElMenuItem,
  ElRow,
  ElSubMenu
} from 'element-plus'
import { routerPush } from '@/router'

export default defineComponent({
  setup() {
    return () => (
      <ElAffix offset={0.01}>
        <ElRow class={style.background}>
          <ElCol lg={16} md={24} sm={24} xs={24}>
            <ElMenu
              mode="horizontal"
              class={style.menu}
              onSelect={async (index) => {
                if (index === '/services/questions') {
                  await routerPush('/services/center')
                  // 跳转到 id services-center-qa
                  window.location.hash = 'services-center-qa'
                } else {
                  routerPush(index)
                }
              }}
            >
              <ElMenuItem index="/home" style={{ paddingRight: '50px' }}>
                <img src={Icon} alt="icon" class={style.icon} />
              </ElMenuItem>
              <ElMenuItem index="/home" class={style.menuItem}>
                <span class={style.menuText}>Home</span>
              </ElMenuItem>
              <ElSubMenu index="/services" class={style.menuItem}>
                {{
                  title: () => <span class={style.menuText}>Services</span>,
                  default: () => (
                    <>
                      <ElMenuItem index="/services/center">
                        <span class={style.subMenuText}>
                          Offshore Development Center
                        </span>
                      </ElMenuItem>
                      <ElMenuItem index="/services/questions">
                        <span class={style.subMenuText}>
                          Frequently asked questions
                        </span>
                      </ElMenuItem>
                    </>
                  )
                }}
              </ElSubMenu>
              <ElMenuItem index="/about" class={style.menuItem}>
                <span class={style.menuText}>About</span>
              </ElMenuItem>
            </ElMenu>
          </ElCol>
          <ElCol lg={8} md={0} sm={0} xs={0}>
            <Button
              class={style.top42}
              mode="red"
              style={{ marginLeft: '20px' }}
            >
              Get in touch
            </Button>
            <Button
              class={style.top42}
              style={{ marginLeft: '16px' }}
              mode="white"
            >
              Tel:400-3444-5555
            </Button>
          </ElCol>
        </ElRow>
      </ElAffix>
    )
  }
})
