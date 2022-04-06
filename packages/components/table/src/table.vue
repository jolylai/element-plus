<template>
  <table :class="[ns.b()]">
    <div ref="hiddenColumns" class="hidden-columns">
      <slot />
    </div>
    <hColgroup
      :columns="store.states.columns.value"
      :table-layout="tableLayout"
    />
    <table-body :store="store"></table-body>
  </table>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, provide, ref } from 'vue'

import defaultProps from './table/defaults'
import type { Table } from './table/defaults'
import TableBody from './table-body'
import { createStore } from './store/helper'
import { TABLE_INJECTION_KEY } from './tokens'
import useStyle from './table/style-helper'
import { hColgroup } from './h-helper'

import { useNamespace } from '@pomelo-plus/hooks'

let tableIdSeed = 1

export default defineComponent({
  components: { TableBody, hColgroup },
  name: 'PoTable',
  props: defaultProps,
  setup(props) {
    type Row = typeof props.data[number]

    const ns = useNamespace('table')

    // table 实例
    const table = getCurrentInstance() as Table<Row>
    const tableId = `po-table-${tableIdSeed++}`
    table.tableId = tableId
    provide(TABLE_INJECTION_KEY, table)

    const store = createStore<Row>(table, props)
    table.store = store

    const { tableLayout } = useStyle<Row>(props, table)

    const hiddenColumns = ref()

    return { ns, store, hiddenColumns, tableLayout }
  }
})
</script>
