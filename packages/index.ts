import type { App } from 'vue'

import ElProgress from './progress'
import ELAffix from './affix'

const components =  [ ElProgress, ELAffix ]

const install = (app: App) => {
  components.forEach(component =>{
    app.component(component.name, component)
  })
}

export default  {
  install
}