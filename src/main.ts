import { createApp } from 'vue'
import App from './App.vue'
import 'element-plus/dist/index.css'
import { routers } from '@/router';


const app = createApp(App)

app.use(routers)

app.mount('#app')
