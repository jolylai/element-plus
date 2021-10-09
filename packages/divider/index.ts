import Divider from './src/index.vue'

Divider.install = app => {
  app.component('PoDivider', Divider)
}

export default Divider
