import { useNamespace } from '@/hooks'
import { TableBodyProps } from './defaults'

export default function useStyle<T>(props: Partial<TableBodyProps<T>>) {
  const ns = useNamespace('table')

  const getRowClass = () => {
    const classes = [ns.e('row')]

    return classes
  }

  return { getRowClass }
}
