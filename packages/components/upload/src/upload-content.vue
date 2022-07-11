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
import { genFileId, UploadProgressEvent } from './upload'
import type { UploadUserFile, UploadFile, UploadRawFile } from './upload'
import ajax from './ajax'

export type UploadContentProps = {
  action: string
  headers?: Headers | Record<string, any>
  data?: Record<string, any>
  name?: string
  fileList?: UploadUserFile[]
  withCredentials?: boolean
  onStart?: (file: UploadRawFile) => void
  onSuccess?: (response: any, uploadFile: UploadRawFile) => void
  onProgress?: (event: UploadProgressEvent, uploadFile: UploadRawFile) => void
  onError?: (event: Error, uploadFile: UploadRawFile) => void
}

const props = withDefaults(defineProps<UploadContentProps>(), {
  name: 'file',
  withCredentials: false,
  onStart: () => {},
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

  if (!files) return
  uploadFiles(Array.from(files))
}

const uploadFiles = (files: File[]) => {
  if (!files.length) return

  for (const file of files) {
    const rawFile = file as UploadRawFile
    rawFile.uid = genFileId()
    props.onStart(rawFile)
    upload(rawFile)
  }
}

const upload = (file: UploadRawFile) => {
  // todo check file before upload
  doUpload(file)
}

const doUpload = (file: UploadRawFile) => {
  const {
    action,
    data,
    name,
    headers,
    withCredentials,
    onProgress,
    onSuccess,
    onError,
  } = props

  ajax({
    action,
    data,
    filename: name,
    file,
    headers,
    withCredentials,
    onProgress: (e: UploadProgressEvent) => {
      onProgress(e, file)
    },
    onSuccess: (response: XMLHttpRequestResponseType) => {
      onSuccess(response, file)
    },
    onError: (error) => {
      onError(error, file)
    },
  })
}
</script>
