import { defineProps, withDefaults } from 'vue'

export type PButtonSize = 'small' | 'medium' | 'default' | 'large'

export type PButtonType = 'primary' | 'success' | 'warning' | 'danger'

export interface ButtonProps {
  // size: PButtonSize
  type?: PButtonType
}

export const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'primary',
})
