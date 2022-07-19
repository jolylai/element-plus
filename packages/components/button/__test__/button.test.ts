import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Button from '../src/button.vue'

describe('button', () => {
  test('create', () => {
    const wrapper = mount(Button, {
      props: { type: 'primary' },
    })

    expect(wrapper.classes()).toContain('po-button--primary')
  })
})
