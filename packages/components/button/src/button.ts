import { buildProps } from '@pomelo-plus/utils'
import { defineProps, withDefaults } from 'vue'

export type PButtonSize = 'small' | 'medium' | 'default' | 'large'

export type ButtonType = 'primary' | 'success' | 'warning' | 'danger'

// export const buttonProps = buildProps({
//   type:ButtonType
// })
