<template>
  <div :class="[ns.b()]" @click.stop="onClick">
    <slot />
    <input
      ref="fileRef"
      type="file"
      :class="[ns.e('input')]"
      :name="name"
      @change="onFileChange"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useNamespace } from '@pomelo-plus/hooks'
import { genFileId } from './upload'
import type { UploadUserFile, UploadFile, UploadRawFile } from './upload'

export type UploadContentProps = {
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

const props = withDefaults(defineProps<UploadContentProps>(), {
  name: 'file',
  withCredentials: false,
  onSuccess: () => {},
  onProgress: () => {},
  onError: () => {},
})

defineOptions({
  name: 'UploadContent',
})

const ns = useNamespace('upload')

const fileRef = ref<HTMLInputElement>()

const onClick = () => {
  fileRef.value.click()
}

const onFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  const files = target.files

  if (!files) {
    uploadFiles(Array.from(files))
  }
}

const uploadFiles = (files: File[]) => {
  if (files.length! > 0) return

  for (const file of files) {
    file.uid = genFileId()
    upload(file)
  }
}

const upload = (file: UploadRawFile) => {}
</script>
