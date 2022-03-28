import { ComponentInternalInstance, Ref, VNode } from 'vue'
import { Table } from '../table/defaults'

type CI<T> = { column: TableColumnCtx<T>; $index: number }

export interface TableColumn<T> extends ComponentInternalInstance {
  vnode: {
    vParent: TableColumn<T> | Table<T>
  } & VNode
  vParent: TableColumn<T> | Table<T>
  columnId: string
  columnConfig: Ref<Partial<TableColumnCtx<T>>>
}

export interface TableColumnCtx<T> {
  id: string
  realWidth: number
  type: string
  label: string
  className: string
  labelClassName: string
  property: string
  prop: string
  width: string | number
  minWidth: string | number
  renderHeader: (data: CI<T>) => VNode
  sortable: boolean | string
  sortMethod: (a: T, b: T) => number
  sortBy: string | ((row: T, index: number) => string) | string[]
  resizable: boolean
  columnKey: string
  rawColumnKey: string
  align: string
  headerAlign: string
  showTooltipWhenOverflow: boolean
  showOverflowTooltip: boolean
  fixed: boolean | string
  formatter: (
    row: T,
    column: TableColumnCtx<T>,
    cellValue,
    index: number
  ) => VNode | string
  selectable: (row: T, index: number) => boolean
  reserveSelection: boolean
  renderCell: (data: any) => void
  getColumnIndex: () => number
}

export default {
  property: String,
  prop: String
}
