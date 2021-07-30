import Popper from './src/index.vue'

Popper.install = app => {
  app.component(Popper.name, Popper)
}

export default Popper

export * from './src/renderers/index'
export { default as defaultProps, Effect } from './src/use-popper/defaults'

