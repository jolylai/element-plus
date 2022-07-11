<template>
  <div>
    <upload-content v-bind="uploadContentProps">
      <slot></slot>
    </upload-content>

    <upload-list
      v-if="showFileList"
      :files="uploadFiles"
      :on-remove="handleRemove"
    />
  </div>
</template>

<script lang="ts" setup>
import type { UploadUserFile, UploadFile } from './upload'
import UploadContent, { UploadContentProps } from './upload-content.vue'
import UploadList from './upload-list.vue'
import { useHandler } from './use-handlers'

export type UploadProps = {
  action: string
  headers?: Headers | Record<string, any>
  data?: Record<string, any>
  name?: string
  fileList?: UploadUserFile[]
  showFileList?: boolean
  withCredentials?: boolean
  onChange?: (file: UploadFile, fileList: UploadFile[]) => void
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
  showFileList: true,
  onChange: () => {},
  onSuccess: () => {},
  onProgress: () => {},
  onError: () => {},
})

const {
  uploadFiles,
  handleStart,
  handleProgress,
  handleSuccess,
  handleError,
  handleRemove,
} = useHandler(props)

const uploadContentProps: UploadContentProps = {
  ...props,
  onStart: handleStart,
  onProgress: handleProgress,
  onSuccess: handleSuccess,
  onError: handleError,
}
</script>
