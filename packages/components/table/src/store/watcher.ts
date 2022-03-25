import { ref, Ref } from 'vue'
import { TableColumnCtx } from '../table-column/defaults'

function useWatcher<T>() {
  const columns: Ref<TableColumnCtx<T>[]> = ref([])
  const _columns: Ref<TableColumnCtx<T>[]> = ref([])

  const updateColumns = () => {
    columns.value = []
  }

  return {
    states: {
      columns,
      _columns
    }
  }
}

export default useWatcher
