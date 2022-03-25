import { ComponentInternalInstance, PropType, Ref } from 'vue'
import { Store } from '../store'

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

export interface TableProps<T> {
  data: T[]
}

export default {
  data: {
    type: Array as PropType<any[]>,
    default: () => []
  }
}
