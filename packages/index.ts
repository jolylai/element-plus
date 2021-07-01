import type { App } from 'vue'

import ElProgress from './progress'
import ELAffix from './affix'
import ElEllipsis from './ellipsis'

const components =  [ ElProgress, ELAffix ,ElEllipsis]

const install = (app: App) => {
  components.forEach(component =>{
    app.component(component.name, component)
  })
}

export default  {
  install
}