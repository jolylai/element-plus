<template>
  <po-popover
    placement="top-start"
    title="标题"
    width="200"
    trigger="hover"
    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
  >
    <template #reference>
      <po-button>hover 激活</po-button>
    </template>
  </po-popover>
</template>
