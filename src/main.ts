import { createApp } from 'vue'
import router from './router'
import pinia from './store'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import './network'
const app = createApp(App)
console.log(app)

app.use(router)
app.use(pinia)
app.use(ElementPlus)
app.mount('#app')
