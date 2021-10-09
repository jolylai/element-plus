import Row from './src/row.vue'
import Col from './src/col.vue'

Row.install = app => {
  app.component(Row.name, Row)
}

Col.install = app => {
  app.component(Col.name, Col)
}

export { Row, Col }

export default {
  Row,
  Col,
  install(app) {
    app.component(Row.name, Row)
    app.component(Col.name, Col)
  },
}
