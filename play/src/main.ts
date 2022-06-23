import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import { PoButton } from 'pomelo-plus'
import '@pomelo-plus/theme/dist/index.css'

createApp(App).use(PoButton).use(router).mount('#app')
