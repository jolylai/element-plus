import { mount } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vitest'

import Affix from '../src/affix.vue'

const AXIOM = 'Rem is the best girl'

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

describe('Affix.vue', () => {
  test('render', async () => {
    const wrapper = mount(Affix, {
      props: {},
      slots: {
        default: AXIOM,
      },
    })

    expect(wrapper.text()).toEqual(AXIOM)

    const mockAffixRect = vi
      .spyOn(wrapper.find('.po-affix').element, 'getBoundingClientRect')
      .mockReturnValue({
        height: 40,
        width: 1000,
        top: -100,
        bottom: -80,
      } as DOMRect)

    const mockDocumentRect = vi
      .spyOn(document.documentElement, 'getBoundingClientRect')
      .mockReturnValue({
        height: 200,
        width: 1000,
        top: 0,
        bottom: 200,
      } as DOMRect)

    const evt = new CustomEvent('scroll', {
      detail: {
        target: {
          scrollTop: 200,
        },
      },
    })

    document.documentElement.dispatchEvent(evt)

    await sleep(2000)

    console.log('wrapper: ', wrapper)
    expect(wrapper.find('.po-affix--fixed').exists()).toBe(true)
  })
})
