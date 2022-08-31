import { createApp } from 'vue'
import App from './App.vue'
import 'element-plus/dist/index.css'
import { routers } from '@/router'
import { createPinia } from 'pinia'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

routers.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

routers.afterEach(() => {
  NProgress.done()
})

const app = createApp(App)

app.use(routers)
app.use(createPinia())


app.mount('#app')
