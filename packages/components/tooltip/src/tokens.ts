import type { InjectionKey, Ref } from 'vue'

export type PoTooltipInjectionContext = {
  open: Ref<boolean>
  onOpen: (e?: Event) => void
  onClose: (e?: Event) => void
  toggle: (e: Event) => void
}

export const TOOLTIP_INJECTION_KEY: InjectionKey<PoTooltipInjectionContext> =
  Symbol('poToolTip')
