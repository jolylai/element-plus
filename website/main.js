import { createApp } from 'vue'
import naive from 'naive-ui'
import router from './routes/router'

import App from './App.vue'

const app = createApp(App)

app.use(naive)
app.use(router)

app.mount('#app')
