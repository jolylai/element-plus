import { InjectionKey } from "vue"
import type { default as CascaderNode } from './node'

export interface ElCascaderPanelContext {
  // expandingNode: Nullable<CascaderNode>
  expandNode: (node: CascaderNode, silent?: boolean) => void
}

export const CASCADER_PANEL_INJECTION_KEY: InjectionKey<ElCascaderPanelContext> =
  Symbol()