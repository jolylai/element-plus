import { createApp } from 'vue'
import naive from 'naive-ui'

import router from './routes/router'
import App from './App.vue'

// pomelo ui
import pomelo from '../packages/index'
import '../theme/index.scss'

const app = createApp(App)

app.use(naive)
app.use(router)
app.use(pomelo)

app.mount('#app')
