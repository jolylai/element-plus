<template>
  <div>
    <upload-content v-bind="uploadContentProps">
      <slot></slot>
    </upload-content>
    <upload-list :files="uploadFiles" />
  </div>
</template>

<script lang="ts" setup>
import { useUploadFiles } from './upload'
import type { UploadUserFile, UploadFile } from './upload'
import UploadContent, { UploadContentProps } from './upload-content.vue'
import UploadList from './upload-list.vue'

export type UploadProps = {
  action: string
  headers?: Headers
  data?: Record<string, any>
  name?: string
  fileList?: UploadUserFile[]
  withCredentials?: boolean
  onSuccess?: (
    response: any,
    uploadFile: UploadFile,
    uploadFiles: UploadFile[]
  ) => void
  onProgress?: (
    event: Event,
    uploadFile: UploadFile,
    uploadFiles: UploadFile[]
  ) => void
  onError?: (
    event: Error,
    uploadFile: UploadFile,
    uploadFiles: UploadFile[]
  ) => void
}

const props = withDefaults(defineProps<UploadProps>(), {
  name: 'file',
  withCredentials: false,
  onSuccess: () => {},
  onProgress: () => {},
  onError: () => {},
})

const uploadContentProps: UploadContentProps = {
  ...props,
}

const { uploadFiles } = useUploadFiles(props)
console.log('uploadFiles: ', uploadFiles)
</script>
