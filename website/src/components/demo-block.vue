<template>
  <div class="demo-block">
    <div class="source">
      <slot name="source"></slot>
    </div>
    <div ref="meta" class="meta">
      <div v-if="$slots.default" class="description">
        <slot></slot>
      </div>
      <div class="highlight">
        <slot name="highlight"></slot>
      </div>
    </div>
  </div>
</template>
