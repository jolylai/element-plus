<template>
  <po-space direction="vertical">
    <po-space size="small">
      <po-button>Oops!</po-button>
      <po-button>Oops!</po-button>
      <po-button>Oops!</po-button>
      <po-button>Long! Long! Cross the line!</po-button>
    </po-space>
  </po-space>
</template>

<script lang="ts" setup>
import { ref } from '@vue/reactivity'

const size = ref('small')
</script>
