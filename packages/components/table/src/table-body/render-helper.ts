import { h } from 'vue'
import { RenderRowData } from '../table/defaults'
import { TableBodyProps } from './defaults'
import useStyle from './styles-helper'

function useRender<T>(props: Partial<TableBodyProps<T>>) {
  const { getRowClass } = useStyle(props)

  const rowRender = (row: T, $index: number) => {
    const { store } = props
    const { columns } = store.states

    return h(
      'tr',
      { class: getRowClass() },
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
