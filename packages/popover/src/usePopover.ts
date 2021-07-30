import { computed, ref, SetupContext, watch } from 'vue'
import usePopper, { EmitType } from '../../popper/src/use-popper'
import { IPopperOptions } from '../../popper/src/use-popper/defaults'
import PopupManager from '../../utils/popup-manager'
import { isString } from '../../utils/util'

export interface IUsePopover extends IPopperOptions {
  width: number | string
}

const usePopover = (props: IUsePopover, ctx: SetupContext<string[]>) => {
  const zIndex = ref(PopupManager.zIndex)

  const width = computed(() => {
    if (isString(props.width)) {
      return props.width as string
    } else {
      return `${props.width}px`
    }
  })

  const properStyle = computed(() => {
    return {
      width: width.value,
      zIndex: zIndex.value,
    }
  })

  const properProps = usePopper(props, ctx as SetupContext<EmitType[]>)

  watch(properProps.visibility, val => {
    if (val) {
      zIndex.value = PopupManager.nextZIndex()
    }
    ctx.emit(val ? 'show' : 'hide')
  })

  return { ...properProps, properStyle }
}

export default usePopover
