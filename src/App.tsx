import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
import '@/styles/global.css'

export default defineComponent({
  setup() {
    return () => (
      <>
        <RouterView />
      </>
    )
  }
})
