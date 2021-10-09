import Col from './src/index.vue'

Col.install = app => {
  app.component(Col.name, Col)
}

export default Col
