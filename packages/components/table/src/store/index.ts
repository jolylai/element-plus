import { getCurrentInstance, unref } from 'vue'
import { TableColumnCtx } from '../table-column/defaults'
import { Table } from '../table/defaults'
import useWatcher from './watcher'

function useStore<T>() {
  const instance = getCurrentInstance() as Table<T>

  const watcher = useWatcher<T>()
  type StoreStates = typeof watcher.states

  const mutations = {
    setData(states: StoreStates, data: T[]) {
      states.data.value = data
      states._data.value = data
    },
    insertColumn(states: StoreStates, column: TableColumnCtx<T>) {
      console.log('column: insertColumn', column)
      states._columns.value.push(column)
      states.columns.value.push(column)
    }
  }

  const commit = (name: keyof typeof mutations, ...args) => {
    const mutations = instance.store.mutations
    if (mutations[name]) {
      mutations[name].apply(instance, [instance.store.states].concat(args))
    } else {
      throw new Error(`Action not found: ${name}`)
    }
  }

  return {
    ...watcher,
    mutations,
    commit
  }
}

export default useStore

class HelperStore<T> {
  Return = useStore<T>()
}

type StoreFilter = Record<string, string[]>
export type Store<T> = HelperStore<T>['Return']
