import { TableBodyProps } from './defaults'

function useRender<T>(props: Partial<TableBodyProps<T>>) {
  const rowRender = (row: T, $index: number) => {}

  const wrappedRowRender = () => {}

  return { wrappedRowRender }
}
