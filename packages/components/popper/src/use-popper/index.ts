import { createPopper } from '@popperjs/core'
import { ComponentPublicInstance, computed, ref, SetupContext } from 'vue'
import { $, isHTMLElement } from '../../../../utils/util'
import { IPopperOptions } from './defaults'
import usePopperOptions from './popper-options'

export type EmitType =
  | 'update:visible'
  | 'after-enter'
  | 'after-leave'
  | 'before-enter'
  | 'before-leave'

export default function usePopper(
  props: IPopperOptions,
  { emit }: SetupContext<EmitType[]>
) {
  const arrowRef = ref()
  const triggerRef = ref(null)
  const popperRef = ref(null)

  const visibility = computed<boolean>(() => false)

  const popperOptions = usePopperOptions(props, {
    arrow: arrowRef
  })

  function initializePopper() {
    if (!$(visibility)) {
      return
    }

    const unwrappedTrigger = $(triggerRef)
    const _trigger = isHTMLElement(unwrappedTrigger)
      ? unwrappedTrigger
      : (unwrappedTrigger as ComponentPublicInstance).$el

    const popperInstance = createPopper(
      _trigger,
      $(popperRef),
      $(popperOptions)
    )

    popperInstance.update()
  }

  return { visibility }
}
