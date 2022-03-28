import { ref, Ref } from 'vue'
import { TableColumnCtx } from '../table-column/defaults'

function useWatcher<T>() {
  const columns: Ref<TableColumnCtx<T>[]> = ref([])
  const _columns: Ref<TableColumnCtx<T>[]> = ref([])
  const data: Ref<T[]> = ref([])
  const _data: Ref<T[]> = ref([])

  const updateColumns = () => {
    columns.value = []
  }

  return {
    states: {
      columns,
      _columns,
      data,
      _data
    }
  }
}

export default useWatcher
