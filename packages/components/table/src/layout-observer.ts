import { onMounted, onUpdated } from 'vue'
import { Table } from './table/defaults'

function useLayoutObserver<T>(root: Table<T>) {
  console.log('root: ', root)

  onMounted(() => {
    onColumnsChange()
  })

  onUpdated(() => {
    console.log('update')
    onColumnsChange()
  })

  const onColumnsChange = () => {
    const cols = root.vnode.el?.querySelectorAll('colgroup > col') || []
    console.log('cols: ', cols)
    if (!cols.length) return
    const column = root.store.states.columns
    console.log('column: ', column)
  }

  return { onColumnsChange }
}

export default useLayoutObserver
