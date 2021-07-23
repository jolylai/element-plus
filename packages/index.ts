import type { App } from 'vue'

import ElProgress from './progress'
import ELAffix from './affix'
import ElEllipsis from './ellipsis'

import Button from './button'
import Icon from './icon'
import Image from './image'
import Upload from './upload'

const components =  [Button,Icon, ElProgress, ELAffix ,ElEllipsis, Image, Upload]

const install = (app: App) => {
  components.forEach(component =>{
    app.component(component.name, component)
  })
}

export default  {
  install
}