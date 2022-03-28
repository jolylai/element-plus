import useStore from '.'
import { Table, TableProps } from '../table/defaults'

/**
 *
 * @param table Table 实例
 * @param props Table 属性
 */
export function createStore<T>(table: Table<T>, props: TableProps<T>) {
  const store = useStore<T>()

  return store
}
