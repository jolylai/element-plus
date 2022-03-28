import Table from './src/table.vue'
import { withInstall, withNoopInstall } from '@/utils'
import TableColumn from './src/table-column'

export const PoTable = withInstall(Table, { TableColumn })
export const PoTableColumn = withNoopInstall(TableColumn)

export default PoTable
