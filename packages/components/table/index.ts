import Table from './src/table.vue'
import { withInstall, withNoopInstall } from '@pomelo-plus/utils'
import TableColumn from './src/table-column'

export const PoTable = withInstall(Table, { TableColumn })
export const PoTableColumn = withNoopInstall(TableColumn)

export default PoTable
