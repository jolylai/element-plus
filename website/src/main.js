import { createApp } from 'vue'
import App from './App.vue'
import DemoBlock from './components/demo-block.vue'
import { ElProgress } from 'element-plus'
console.log('ElProgress: ', ElProgress)

createApp(App)
  .component(ElProgress.name, ElProgress)
  .component('DemoBlock', DemoBlock)
  .mount('#app')
