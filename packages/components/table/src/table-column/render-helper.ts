import { computed, ComputedRef, getCurrentInstance, h, ref } from 'vue'
import { parseMinWidth, parseWidth } from '../../util'
import { defaultRenderCell } from '../config'
import { TableColumn, TableColumnCtx } from './defaults'

export default function useRender<T>(
  props: TableColumnCtx<T>,
  slots,
  owner: ComputedRef<any>
) {
  const instance = getCurrentInstance() as TableColumn<T>
  const columnId = ref('')

  const columnOrTableParent = computed(() => {
    let parent: any = instance.vnode.vParent || instance.parent
    while (parent && !parent.tableId && !parent.columnId) {
      parent = parent.vnode.vParent || parent.parent
    }
    return parent
  })

  const realWidth = ref(parseWidth(props.width))
  const realMinWidth = ref(parseMinWidth(props.minWidth))
  const setColumnWidth = (column: TableColumnCtx<T>) => {
    if (realWidth.value) column.width = realWidth.value
    if (realMinWidth.value) {
      column.minWidth = realMinWidth.value
    }

    if (!column.minWidth) {
      column.minWidth = 80
    }
    column.realWidth = Number(
      column.width === undefined ? column.minWidth : column.width
    )
    return column
  }

  const setColumnRender = (column: TableColumnCtx<T>) => {
    column.renderCell = data => {
      console.log('data: renderCell', data)
      const children = defaultRenderCell(data)
      return h('div', { class: 'cell' }, children)
    }
  }

  const getColumnElIndex = (children, child) => {
    return Array.prototype.indexOf.call(children, child)
  }

  const getPropsData = (...propsKey: unknown[]) => {
    return propsKey.reduce((prev, cur) => {
      if (Array.isArray(cur)) {
        cur.forEach(key => {
          prev[key] = props[key]
        })
      }

      return prev
    }, {})
  }

  return {
    columnId,
    getPropsData,
    setColumnRender,
    columnOrTableParent,
    getColumnElIndex,
    setColumnWidth
  }
}
