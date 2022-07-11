<template>
  {{ imgUrl }}
  <po-upload
    action="http://47.113.95.50:7070/api/file"
    :show-file-list="false"
    :headers="headers"
    :on-success="onSuccess"
    :before-upload="onBeforeUpload"
  >
    <po-avatar :src="imgUrl" :size="80" />
  </po-upload>
</template>

<script lang="ts" setup>
const imgUrl = ref<string>('https://picsum.photos/200')

const headers = {
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6InhpeGkiLCJwYXNzd29yZCI6IiQyYiQxMCRxVzVGcGxLcll6Y01rdmh0WHNQVXB1S1JsTlBwSE9Ma0V1SEJGbjEwd2tid3guZ0JFNE45TyIsImNyZWF0ZWRfYXQiOiIyMDIyLTA1LTEyVDA5OjA0OjA1Ljg4MloiLCJ1cGRhdGVkX2F0IjoiMjAyMi0wNS0xMlQwOTowNDowNS44ODZaIiwiaWF0IjoxNjU3NTIyOTE2LCJleHAiOjE2NTc2MDkzMTZ9.r0K74xSjxc1Q-jzNi11YuJQ01xWGm93QwlQ1GeUAmpg',
}

const onSuccess = (response, uploadFile) => {
  console.log('response, uploadFile: ', response, uploadFile)

  console.log('response.data.url: ', response.data.url)
  imgUrl.value = response.data.url
}

const onBeforeUpload = (rawFile) => {
  console.log('rawFile: ', rawFile)
  return false
}
</script>
