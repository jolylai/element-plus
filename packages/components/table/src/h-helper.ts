import { h } from 'vue'

export function hColgroup(props) {
  const isAuto = props.tableLayout === 'auto'
  console.log(' props.tableLayout: ', props.tableLayout)
  let columns = props.columns || []
  if (isAuto) {
    if (columns.every(column => column.width === undefined)) {
      columns = []
    }
  }
  const getPropsData = column => {
    const propsData = {
      key: `${props.tableLayout}_${column.id}`,
      style: {},
      name: undefined
    }
    if (isAuto) {
      propsData.style = {
        width: `${column.width}px`
      }
    } else {
      propsData.name = column.id
    }
    console.log('propsData: ', propsData)
    return propsData
  }

  return h(
    'colgroup',
    {},
    columns.map(column => h('col', getPropsData(column)))
  )
}

hColgroup.props = ['columns', 'tableLayout']
