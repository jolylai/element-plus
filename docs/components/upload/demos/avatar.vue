<template>
  <po-upload
    action="http://47.113.95.50:7070/api/file"
    :show-file-list="false"
    :headers="headers"
    :on-success="onSuccess"
    :before-upload="onBeforeUpload"
  >
    <po-avatar v-if="imgUrl" :src="imgUrl" :size="80" />
    <div v-else class="avatar-uploader">上传</div>
  </po-upload>
</template>

<script lang="ts" setup>
const imgUrl = ref<string>()

const headers = {
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6InhpeGkiLCJwYXNzd29yZCI6IiQyYiQxMCRxVzVGcGxLcll6Y01rdmh0WHNQVXB1S1JsTlBwSE9Ma0V1SEJGbjEwd2tid3guZ0JFNE45TyIsImNyZWF0ZWRfYXQiOiIyMDIyLTA1LTEyVDA5OjA0OjA1Ljg4MloiLCJ1cGRhdGVkX2F0IjoiMjAyMi0wNS0xMlQwOTowNDowNS44ODZaIiwiaWF0IjoxNjU3NTIyOTE2LCJleHAiOjE2NTc2MDkzMTZ9.r0K74xSjxc1Q-jzNi11YuJQ01xWGm93QwlQ1GeUAmpg',
}

const onSuccess = (response, uploadFile) => {
  imgUrl.value = response.data.url
}

const onBeforeUpload = (rawFile) => {
  return false
}
</script>

<style scoped>
.avatar-uploader {
  width: 80px;
  height: 80px;
  border: 1px dashed #9d9d9d;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
