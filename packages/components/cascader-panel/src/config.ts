import { CascaderConfig, ExpandTrigger } from './node'

export const DefaultProps: CascaderConfig = {
  expandTrigger: ExpandTrigger.CLICK,
  multiple: false,
  checkStrictly: false, // whether all nodes can be selected
  emitPath: true, // wether to emit an array of all levels value in which node is located
  lazy: false,
  lazyLoad: () => {},
  value: 'value',
  label: 'label',
  children: 'children',
  leaf: 'leaf',
  disabled: 'disabled',
  hoverThreshold: 500,
}
