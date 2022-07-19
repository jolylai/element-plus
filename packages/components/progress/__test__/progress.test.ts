import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Progress from '../src/progress.vue'

describe('Progress', () => {
  test('percent', () => {
    const wrapper = mount(Progress, {
      props: {
        percentage: 66,
      },
    })
    expect(wrapper.find('.po-progress__text').text()).toBe('66%')
    // expect(
    //   wrapper.find('.po-progress-bar__inner').attributes('style')
    // ).toContain('width: 66%; animation-duration: 3s;')
  })
})
