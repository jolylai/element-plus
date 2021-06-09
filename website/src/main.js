import { createApp } from 'vue'
import App from './App.vue'
import DemoBlock from './components/demo-block.vue'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/src/index.scss'
import router from './router'
import 'highlight.js/styles/color-brewer.css'

const app = createApp(App)

app.use(router).use(ElementPlus)

app.component('DemoBlock', DemoBlock)

app.mount('#app')
