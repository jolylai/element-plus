import { mount } from '@vue/test-utils'
import Progress from '../src/index.vue'

describe('Progress', () => {
  test('percent', () => {
    const wrapper = mount(Progress, {
      props: {
        percentage: 66,
      },
    })
    expect(wrapper.find('.el-progress__text').text()).toBe('66%')
    expect(wrapper.find('.el-progress-bar__inner').attributes('style')).toBe('width: 66%; animation-duration: 3s;')
  })
})
