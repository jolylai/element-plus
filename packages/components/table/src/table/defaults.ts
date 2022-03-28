import { ComponentInternalInstance, PropType, Ref } from 'vue'
import { Store } from '../store'
import { TableColumnCtx } from '../table-column/defaults'

export interface RenderRowData<T> {
  store: Store<T>
  column: TableColumnCtx<T>
  row: T
  $index: number
}

interface TableState {
  isGroup: Ref<boolean>
  resizeState: Ref<{
    width: any
    height: any
  }>
  doLayout: () => void
  debouncedUpdateLayout: () => void
}

export interface Table<T> extends ComponentInternalInstance {
  state: TableState
  store: Store<T>
  tableId: string
}

type Layout = 'fixed' | 'auto'

export interface TableProps<T> {
  data: T[]
  maxHeight: number
  tableLayout: Layout
}

export default {
  data: {
    type: Array as PropType<any[]>,
    default: () => []
  },
  maxHeight: [String, Number],
  tableLayout: {
    type: String as PropType<Layout>,
    default: 'fixed'
  }
}
