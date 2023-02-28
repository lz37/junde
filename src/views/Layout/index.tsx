import { useStore } from '@/store'
import { RouterView } from 'vue-router'
import BackTop from './BackTop'
import Footer from './Footer'
import Menu from './Menu'
export default defineComponent({
  setup() {
    const store = useStore()
    onMounted(() => {
      window.onresize = () => {
        store.commit('setMobile', window.innerWidth < 1200)
      }
    })
    return () => (
      <div>
        <Menu />
        <RouterView />
        <Footer />
        <BackTop />
      </div>
    )
  }
})
