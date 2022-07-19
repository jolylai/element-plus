import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Message from '../src/message.vue'

const AXIOM = 'Rem is the best girl'

describe('message.vue', () => {
  test('render', () => {
    const wrapper = mount(Message, {
      slots: {
        default: () => AXIOM,
      },
    })

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
