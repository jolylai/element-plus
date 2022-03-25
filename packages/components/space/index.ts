import Space from './src/index.vue'

Space.install = app => {
  app.component(Space.name, Space)
}

export default Space
