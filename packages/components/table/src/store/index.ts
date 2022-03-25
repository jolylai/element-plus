import { getCurrentInstance, unref } from 'vue'
import { TableColumnCtx } from '../table-column/defaults'
import { Table } from '../table/defaults'
import useWatcher from './watcher'

function useStore<T>() {
  const instance = getCurrentInstance() as Table<T>

  const watcher = useWatcher<T>()
  type StoreStates = typeof watcher.states

  const mutations = {
    insertColumn(states: StoreStates, column: TableColumnCtx<T>) {
      states._columns.value.push(column)
    }
  }
}

export default useStore

class HelperStore<T> {
  Return = useStore<T>()
}

type StoreFilter = Record<string, string[]>
export type Store<T> = HelperStore<T>['Return']
