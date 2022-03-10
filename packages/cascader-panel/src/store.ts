import type { CascaderConfig, CascaderOption } from "./node";
import Node from './node'

const flatNodes = (nodes: Node[], leafOnly: boolean) => {
  return nodes.reduce((res, node) => {
    if (node.isLeaf) {
      res.push(node)
    } else {
      !leafOnly && res.push(node)
      res = res.concat(flatNodes(node.children, leafOnly))
    }
    return res
  }, [] as Node[])
}

export default class Store {
  nodes: Node[]
  readonly allNodes: Node[]
  readonly leafNodes: Node[]

  constructor(readonly data: CascaderOption[], readonly config: CascaderConfig){
    const nodes = (data|| []).map(nodeData => new Node(nodeData, this.config))
    this.nodes = nodes
    // this.allNodes = flatNodes(nodes, false)
    // this.leafNodes = flatNodes(nodes, true)
  }

  getNodes(){
    return this.nodes
  }

  getFlattedNodes(leafOnly: boolean){
    return leafOnly ? this.leafNodes : this.allNodes
  }
}
