import { createApp } from 'vue'
import naive from 'naive-ui'

import router from './routes/router'
import App from './App.vue'

// pomelo ui
import pomelo from '../packages/index'
import '../theme/index.scss'

import DemoBlock from './components/DemoBlock.vue'

import 'prismjs/themes/prism.css'

const app = createApp(App)

app.use(naive)
app.use(router)
app.use(pomelo)

app.component('DemoBlock', DemoBlock)

app.mount('#app')
