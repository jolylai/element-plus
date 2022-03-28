import {
  computed,
  defineComponent,
  getCurrentInstance,
  h,
  onBeforeMount,
  onMounted,
  ref
} from 'vue'
import type { TableColumn, TableColumnCtx } from './defaults'
import defaultProps from './defaults'
import useRender from './render-helper'

let columnIdSeed = 1

export default defineComponent({
  name: 'PoTableColumn',
  props: defaultProps,
  setup(props, { slots }) {
    const instance = getCurrentInstance() as TableColumn<any>

    const columnConfig = ref<Partial<TableColumnCtx<any>>>({})

    const owner = computed(() => {
      let parent = instance.parent as any
      while (parent && !parent.tableId) {
        parent = parent.parent
      }

      return parent
    })

    const {
      columnId,
      getPropsData,
      setColumnRender,
      columnOrTableParent,
      getColumnElIndex
    } = useRender((props as unknown) as TableColumnCtx<unknown>, slots, owner)
    const parent = columnOrTableParent.value

    columnId.value = `${
      parent.tableId || parent.columnId
    }_column_${columnIdSeed++}`

    // 设置每列的配置项
    onBeforeMount(() => {
      const defaults = {
        property: props.prop || props.property,

      }

      const basicProps = [
        'columnKey',
        'label',
        'className',
        'labelClassName',
        'type',
        'renderHeader',
        'formatter',
        'fixed',
        'resizable'
      ]
      const sortProps = ['sortMethod', 'sortBy', 'sortOrders']
      const selectProps = ['selectable', 'reserveSelection']
      const filterProps = [
        'filterMethod',
        'filters',
        'filterMultiple',
        'filterOpened',
        'filteredValue',
        'filterPlacement'
      ]

      let column = getPropsData(basicProps, sortProps, selectProps, filterProps)
      console.log('column: ', column)
      column = Object.assign(defaults, column)
      setColumnRender(column)

      columnConfig.value = column
    })

    onMounted(() => {
      const parent = columnOrTableParent.value
      // todo
      const children = parent.refs.hiddenColumns?.children

      // 获取当前行 index
      const getColumnIndex = () =>
        getColumnElIndex(children || [], instance.vnode.el)

      columnConfig.value.getColumnIndex = getColumnIndex
      const columnIndex = getColumnIndex()

      columnIndex > -1 &&
        owner.value.store.commit('insertColumn', columnConfig.value)
    })
  },
  render() {
    return h('div', {}, 'column')
  }
})
