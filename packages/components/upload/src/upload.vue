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
import { Awaitable } from '@pomelo-plus/utils'
import { computed } from '@vue/reactivity'
import { NOOP } from '@vue/shared'
import type { UploadUserFile, UploadRawFile, UploadFile } from './upload'
import UploadContent, { UploadContentProps } from './upload-content.vue'
import UploadList from './upload-list.vue'
import { useHandler } from './use-handlers'

export interface UploadProps {
  action: string
  headers?: Headers | Record<string, any>
  data?: Record<string, any>
  name?: string
  fileList?: UploadUserFile[]
  showFileList?: boolean
  withCredentials?: boolean
  onStart?: (rawFile: UploadRawFile) => void
  beforeUpload?: (
    file: UploadRawFile
  ) => Awaitable<void | undefined | null | boolean | File | Blob>
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

defineOptions({
  name: 'PoUpload',
})

const props = withDefaults(defineProps<UploadProps>(), {
  name: 'file',
  withCredentials: false,
  showFileList: true,
  onStart: NOOP,
  onChange: NOOP,
  onSuccess: NOOP,
  onProgress: NOOP,
  onError: NOOP,
})

const {
  uploadFiles,
  handleStart,
  handleProgress,
  handleSuccess,
  handleError,
  handleRemove,
} = useHandler(props)

const uploadContentProps = computed<UploadContentProps>(() => ({
  ...props,
  beforeUpload: props.beforeUpload,
  onStart: handleStart,
  onProgress: handleProgress,
  onSuccess: handleSuccess,
  onError: handleError,
}))
</script>
