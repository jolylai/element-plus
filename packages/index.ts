import type { App } from 'vue'

import ElProgress from './progress'
import ELAffix from './affix'
import ElEllipsis from './ellipsis'

// 通用
import Button from './button'
import Icon from './icon'

// 布局
import Space from './space'

// 数据录入
import Image from './image'
import Upload from './upload'

// 反馈
import Popover from './popover'

const components =  [
  Button,
  Icon,
  Space,
  ElProgress, 
  ELAffix ,
  ElEllipsis, 
  Image, 
  Upload,
  Popover
]

const install = (app: App) => {
  components.forEach(component =>{
    app.component(component.name, component)
  })
}

export default  {
  install
}