import { computed, watch } from 'vue'
import { Table, TableProps } from './defaults'

function useStyle<T>(props: TableProps<T>, table: Table<T>) {
  watch(
    () => props.data,
    data => {
      table.store.commit('setData', data)
    },
    {
      immediate: true,
      deep: true
    }
  )

  const tableLayout = computed(() => {
    if (props.maxHeight) return 'fixed'
    return props.tableLayout
  })

  return { tableLayout }
}

export default useStyle
