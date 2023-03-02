import Icon from '@/assets/imgs/junde-icon.png'
import style from './style.module.css'
import Button from '@/components/Button'
import { ElAffix, ElMenu, ElMenuItem, ElSubMenu } from 'element-plus'
import { routerPush } from '@/router'
import Background from '@/components/Background'
import img1063Red from '@/assets/imgs/1063red.png'

export default defineComponent({
  setup() {
    const hover = ref(0)
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      const menuBackground = document.querySelector('#menu-background')
      if (scrollTop > 0) {
        menuBackground?.classList.add(style.menuBackgroundShadow)
      } else {
        menuBackground?.classList.remove(style.menuBackgroundShadow)
      }
    }
    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })
    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })
    return () => (
      <ElAffix
        offset={0.01}
        style={{
          width: '100%'
        }}
      >
        <Background
          mode="none"
          id="menu-background"
          style={{
            paddingTop: '0px',
            paddingBottom: '0px',
            height: '122px'
          }}
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
                        <span
                          class={style.subMenuText}
                          style={{
                            color: hover.value === 1 ? '#E23030' : '#333E63'
                          }}
                          onMouseenter={() => {
                            hover.value = 1
                          }}
                          onMouseleave={() => {
                            hover.value = 0
                          }}
                        >
                          Offshore Development Center
                          {hover.value === 1 ? (
                            <img
                              src={img1063Red}
                              alt="img1063"
                              class={style.redArrow}
                            />
                          ) : (
                            <div class={style.blankArrow} />
                          )}
                        </span>
                      </ElMenuItem>
                      <ElMenuItem index="/services/questions">
                        <span
                          class={style.subMenuText}
                          style={{
                            color: hover.value === 2 ? '#E23030' : '#333E63'
                          }}
                          onMouseenter={() => {
                            hover.value = 2
                          }}
                          onMouseleave={() => {
                            hover.value = 0
                          }}
                        >
                          Frequently asked questions
                          {hover.value === 2 ? (
                            <img
                              src={img1063Red}
                              alt="img1063"
                              class={style.redArrow}
                            />
                          ) : (
                            <div class={style.blankArrow} />
                          )}
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
                Tel:4000-632-978
              </Button>
            </div>
          </div>
        </Background>
      </ElAffix>
    )
  }
})
