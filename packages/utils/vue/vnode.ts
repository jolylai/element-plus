import { Fragment, Text, Comment, openBlock, createBlock } from 'vue'
import type { VNode, VNodeChild, VNodeTypes } from 'vue'

type Children = VNodeTypes[] | VNodeTypes

const TEMPLATE = 'template'

export const isFragment = (node: VNodeChild) =>
  (node as VNode).type === Fragment

export const isText = (node: VNodeChild) => (node as VNode).type === Text

export const isComment = (node: VNodeChild) => (node as VNode).type === Comment

export const isTemplate = (node: VNodeChild) =>
  (node as VNode).type === TEMPLATE

export enum PatchFlags {
  TEXT = 1,
  CLASS = 2,
  STYLE = 4,
  PROPS = 8,
  FULL_PROPS = 16,
  HYDRATE_EVENTS = 32,
  STABLE_FRAGMENT = 64,
  KEYED_FRAGMENT = 128,
  UNKEYED_FRAGMENT = 256,
  NEED_PATCH = 512,
  DYNAMIC_SLOTS = 1024,
  HOISTED = -1,
  BAIL = -2,
}

/**
 * get a valid child node (not fragment nor comment)
 * @param node {VNode} node to be searched
 * @param depth {number} depth to be searched
 */
function getChildren(node: VNode, depth: number): undefined | VNode {
  if (isComment(node)) return
  if (isFragment(node) || isTemplate(node)) {
    return depth > 0
      ? getFirstValidNode(node.children as VNodeChild, depth - 1)
      : undefined
  }
  return node
}

export const getFirstValidNode = (
  nodes: VNodeChild,
  maxDepth = 3,
): ReturnType<typeof getChildren> => {
  if (Array.isArray(nodes)) {
    return getChildren(nodes[0] as VNode, maxDepth)
  } else {
    return getChildren(nodes as VNode, maxDepth)
  }
}

export function renderBlock(
  vnode: VNodeTypes,
  props: any,
  children?: Children,
  patchFlg?: number,
  patchProps?: string[],
) {
  return openBlock(), createBlock(vnode, props, children, patchFlg, patchProps)
}
