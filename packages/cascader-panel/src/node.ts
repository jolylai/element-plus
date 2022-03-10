export enum ExpandTrigger {
  CLICK = 'click',
  HOVER = 'hover',
}

export type CascaderNodeValue = string | number

export type isDisabled = (data: CascaderOption, node: Node) => boolean
export type isLeaf = (data: CascaderOption, node: Node) => boolean
export type Resolve = (dataList?: CascaderOption[]) => void
export type LazyLoad = (node: Node, resolve: Resolve) => void

export interface CascaderProps {
  expandTrigger?: ExpandTrigger
  multiple?: boolean
  checkStrictly?: boolean
  emitPath?: boolean
  lazy?: boolean
  lazyLoad?: LazyLoad
  value?: string
  label?: string
  children?: string
  disabled?: string | isDisabled
  leaf?: string | isLeaf
  hoverThreshold?: number
}

export type CascaderConfig = Required<CascaderProps>

export interface CascaderOption extends Record<string, unknown> {
  label?: string
  value?: string | number
  children?: CascaderOption[]
  isLeaf: boolean
}

type ChildrenData = CascaderOption[] | undefined

const calculatePathNodes = (node: Node) => {
  const nodes = [node]
  let parent = node.parent

  while (parent) {
    nodes.unshift(parent)
    parent = parent.parent
  }

  return nodes
}

class Node {
  readonly label: string
  readonly value: CascaderNodeValue
  readonly children: Node[]
  readonly childrenData: ChildrenData
  readonly level: number

  constructor(
    readonly data: Nullable<CascaderOption>,
    readonly config: CascaderConfig,
    readonly parent?: Node,
    readonly root?: false,
  ) {
    const { value: valueKey, label: labelKey, children: childrenKey } = config
    const childrenData = data[childrenKey] as ChildrenData

    this.level = root ? 0 : parent ? parent.level + 1 : 1
    this.label = data[labelKey] as string
    this.value = data[valueKey] as CascaderNodeValue
    this.children = (childrenData || []).map(
      child => new Node(child, config, this, false),
    )
    this.childrenData = childrenData
  }

  get isLeaf(): boolean {
    const { config, data } = this
    const { leaf } = config
    const isLeaf = typeof leaf === 'function' ? leaf(data, this) : data[leaf]

    return isLeaf != undefined ? !!isLeaf : !this.childrenData
  }
}

export default Node
