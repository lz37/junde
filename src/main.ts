import App from '@/App'
import router from '@/router'
import store, { key } from '@/store'
import 'element-plus/dist/index.css'
import '@/styles/global.css'
import '@/styles/element/index.css'
const app = createApp(App)

app.use(router)
app.use(store, key)
app.mount('#app')
