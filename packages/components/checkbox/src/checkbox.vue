<template>
  <label :class="[ns.b()]">
    <span :class="[ns.e('input'), ns.is('checked', isChecked)]">
      <input :class="[ns.e('original')]" type="checkbox" @change="onChange" />
      <span :class="[ns.e('inner')]"></span>
    </span>
    <span :class="ns.e('label')">{{ label }} </span>
  </label>
</template>

<script lang="ts" setup>
import { useNamespace } from '@pomelo-plus/hooks'
import { useCheckbox } from './checkbox'

export type CheckboxProps = {
  label: string
  modelValue: boolean
}

const props = defineProps<CheckboxProps>()

defineOptions({
  name: 'PoCheckbox',
})

const ns = useNamespace('checkbox')

defineEmits(['update:modelValue'])

const { isChecked, onChange } = useCheckbox(props)
</script>
