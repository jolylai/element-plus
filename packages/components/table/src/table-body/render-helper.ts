import { h } from 'vue'
import { RenderRowData } from '../table/defaults'
import { TableBodyProps } from './defaults'

function useRender<T>(props: Partial<TableBodyProps<T>>) {
  const rowRender = (row: T, $index: number) => {
    const { store } = props
    const { columns } = store.states
    console.log('store: ', store)

    return h(
      'tr',
      {},
      columns.value.map((column, cellIndex) => {
        const data: RenderRowData<T> = {
          store: props.store,
          column,
          row,
          $index
        }

        return h('td', {}, [column.renderCell(data)])
      })
    )
  }

  const wrappedRowRender = (row: T, $index: number) => {
    return rowRender(row, $index)
  }

  return { wrappedRowRender }
}

export default useRender
