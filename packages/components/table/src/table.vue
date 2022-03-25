<template>
  <div>
    <table-body />
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, provide } from 'vue'

import defaultProps from './table/defaults'
import type { Table } from './table/defaults'
import TableBody from './table-body'
import { TABLE_INJECTION_KEY } from './tokens'

let tableIdSeed = 1

export default defineComponent({
  components: { TableBody },
  name: 'PoTable',
  props: defaultProps,
  setup(props) {
    type Row = typeof props.data[number]

    const table = getCurrentInstance() as Table<Row>
    const tableId = `po-table-${tableIdSeed++}`
    table.tableId = tableId
    provide(TABLE_INJECTION_KEY, table)

  }
})
</script>
