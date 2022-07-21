<template>
  <div
    v-if="!isClose"
    :class="[ns.b(), ns.m(type), ns.is('width-description', !!title)]"
  >
    <po-icon v-if="showIcon" :class="[ns.e('icon')]">
      <component :is="iconComponent" />
    </po-icon>

    <div :class="[ns.e('content')]">
      <slot v-if="title" name="title">
        <div :class="[ns.e('title')]">
          {{ title }}
        </div>
      </slot>
      <div :class="[ns.e('description')]">
        <slot> </slot>
      </div>
    </div>

    <po-icon v-if="closable" @click="onClose">
      <Close />
    </po-icon>
  </div>
</template>

<script lang="ts" setup>
import { useNamespace } from '@pomelo-plus/hooks'
import { TypeComponents, TypeComponentsMap } from '@pomelo-plus/utils'
import { computed } from '@vue/reactivity'
import { useAlertClose } from './alert'

export type AlertType = 'success' | 'warning' | 'info' | 'error'

export type AlertProps = {
  title?: string
  type?: AlertType
  closable?: boolean
  description?: string
  showIcon?: boolean
}

const props = withDefaults(defineProps<AlertProps>(), {
  type: 'info',
  closable: false,
  showIcon: false,
})

const ns = useNamespace('alert')

const { isClose, onClose } = useAlertClose()

const iconComponent = computed(() => TypeComponentsMap[props.type])

const { Close } = TypeComponents
</script>
