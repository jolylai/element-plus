import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { Component, ComponentPublicInstance, CSSProperties, h } from 'vue'
import Message from '../src/message.vue'

const AXIOM = 'Rem is the best girl'

type MessageInstance = ComponentPublicInstance<{
  // visible: boolean
  iconComponent: string | Component
  // customStyle: CSSProperties
}>

describe('Message.vue', () => {
  test('should render text', () => {
    const wrapper = mount(Message, {
      slots: {
        default: () => AXIOM,
      },
    })

    const vm = wrapper.vm as MessageInstance

    console.log('vm: ', vm)
    expect(wrapper.text()).toEqual(AXIOM)
  })
  // expect(vm.customStyle).toEqual({ top: '16px', zIndex: 0 })

  test('should render VNode', () => {
    const wrapper = mount(Message, {
      slots: {
        default: () => h('span', { class: 'text-node' }, AXIOM),
      },
    })

    expect(wrapper.find('.text-node')).toBe(AXIOM)
  })
})
