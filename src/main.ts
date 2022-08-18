import { createApp } from 'vue'
import App from './App.vue'
import 'element-plus/dist/index.css'
import { routers } from '@/router'
import { createPinia } from 'pinia'


const app = createApp(App)

app.use(routers)
app.use(createPinia())


app.mount('#app')
