import { getCurrentInstance, computed } from 'vue'
import { CheckboxProps } from './checkbox.vue'

export const useCheckbox = (props: CheckboxProps) => {
  const { emit } = getCurrentInstance()!

  const isChecked = computed<boolean>(() => {
    return props.modelValue
  })

  const onChange = (e: Event) => {
    const target = e.target as HTMLInputElement

    emit('update:modelValue', target.checked)
  }

  return {
    isChecked,
    onChange,
  }
}
