import { createApp } from 'vue'
import App from './App.vue'
import DemoBlock from './components/demo-block.vue'

createApp(App)
  .component('DemoBlock', DemoBlock)
  .mount('#app')
