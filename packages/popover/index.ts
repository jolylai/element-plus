import Popover from './src/index.vue'

Popover.install = app => {
  app.component(Popover.name, Popover)
}

export default Popover
