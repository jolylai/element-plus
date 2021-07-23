<template>
  <div class="demo-block">
    <!-- 效果展示 -->
    <div class="demo-content">
      <slot name="content" />
      <slot name="default" />
    </div>

    <!-- 标题 -->
    <n-divider
      v-if="$slots.title"
      title-placement="left"
      style="margin-bottom: 0"
    >
      <slot name="title" />
    </n-divider>

    <!-- 描述 -->
    <div v-if="$slots.description" class="demo-description">
      <slot name="description" />
    </div>

    <n-divider style="margin: 0" dashed />

    <!-- 工具条 -->
    <div class="demo-actions">
      <n-space>
        <n-icon>
          <copy-outline />
        </n-icon>
        <n-icon @click="toggleCodeFold">
          <code-outline />
        </n-icon>
      </n-space>
    </div>

    <!-- <n-divider style="margin: 0" dashed /> -->
    <n-divider style="margin: 0" />
    <div :class="['demo-code', { 'demo-code-unfold': fold }]">
      <slot name="code" />
    </div>
  </div>
</template>

<script setup>
import { CodeOutline, CopyOutline } from '@vicons/ionicons5'
import { ref } from '@vue/reactivity'

const fold = ref(true)

const toggleCodeFold = () => {
  console.log('toggleCodeFold')
  fold.value = !fold.value
}
</script>

<style scoped>
.demo-block {
  margin: 16px;
  border: 1px solid #eee;
}
.demo-actions {
  display: flex;
  justify-content: center;
  padding: 8px 0;
}

.demo-content {
  padding: 16px;
}

.demo-code {
  max-height: 0;
  overflow: hidden;
  margin: 0 16px;
}

.demo-code-unfold {
  max-height: 9999px;
}

.demo-description {
  padding: 16px;
  /* padding-top: 0; */
}
</style>
