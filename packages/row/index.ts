import Row from './src/index.vue'

Row.install = app => {
  app.component(Row.name, Row)
}

export default Row
