import { computed, defineComponent, getCurrentInstance, onMounted } from 'vue'
import { TableColumn } from './defaults'

export default defineComponent({
  name: 'PoTableColumn',
  setup() {
    const instance = getCurrentInstance() as TableColumn<any>

    const owner = computed(() => {
      let parent = instance.parent as any
      while (parent && !parent.tableId) {
        parent = parent.parent
      }

      return parent
    })

    onMounted(() => {
      // owner.value.store.commit(
      //   'insertColumn',
      //   columnConfig.value,
      //   isSubColumn.value ? parent.columnConfig.value : null
      // )
    })
  }
})
