import Icon from '@/assets/imgs/junde-icon.png'
import style from './style.module.css'
import Button from '@/components/Button'
import { ElAffix, ElMenu, ElMenuItem, ElSubMenu } from 'element-plus'
import { routerPush } from '@/router'
import Background from '@/components/Background'

export default defineComponent({
  setup() {
    return () => (
      <ElAffix
        offset={0.01}
        style={{
          width: '100%',
          boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.12);'
        }}
      >
        <Background
          mode="none"
          style={{ paddingTop: '0px', paddingBottom: '0px' }}
        >
          <div class={style.line}>
            <ElMenu
              mode="horizontal"
              class={style.menu}
              onSelect={async (index) => {
                if (index === '/services/questions') {
                  await routerPush('/services/center')
                  // 跳转到 id services-center-qa
                  window.location.hash = 'services-center-qa'
                } else {
                  await routerPush(index)
                }
              }}
            >
              <ElMenuItem
                index="/home"
                style={{ paddingRight: '50px' }}
                class={style.menuItem}
              >
                <img src={Icon} alt="icon" />
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
            <div class={style.buttonHolder}>
              <Button
                class={style.button}
                mode="red"
                style={{ marginLeft: '20px' }}
              >
                Get in touch
              </Button>
              <Button
                class={style.button}
                style={{ marginLeft: '16px' }}
                mode="white"
              >
                Tel:400-3444-5555
              </Button>
            </div>
          </div>
        </Background>
      </ElAffix>
    )
  }
})
