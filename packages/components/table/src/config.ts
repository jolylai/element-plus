import { TableColumnCtx } from './table-column/defaults'

export function defaultRenderCell<T>({
  row,
  column,
  $index
}: {
  row: T
  column: TableColumnCtx<T>
  $index: number
}) {
  const property = column.property
  const value = property && row[property]
  if (column && column.formatter) {
    return column.formatter(row, column, value, $index)
  }
  return value?.toString?.() || ''
}
