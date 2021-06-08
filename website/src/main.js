import { createApp } from 'vue'
import App from './App.vue'
import DemoBlock from './components/demo-block.vue'
import { ElProgress } from 'element-plus'
import router from './router'
import 'highlight.js/styles/color-brewer.css'

const app = createApp(App)

app.use(router)

app.component(ElProgress.name, ElProgress).component('DemoBlock', DemoBlock)

app.mount('#app')
