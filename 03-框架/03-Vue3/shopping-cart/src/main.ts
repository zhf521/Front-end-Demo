import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
const pinia = createPinia()
const app = createApp(App)

//挂载pinia实例
app.use(pinia)
createApp(App).mount('#app')
