import { App } from 'vue'
import CascaderPanel from './src/index.vue'

CascaderPanel.install = (app: App) => {
  app.component(CascaderPanel.name, CascaderPanel)
}

export default CascaderPanel
