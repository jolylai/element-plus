<template>
  <upload
    :action="action"
    :name="name"
    :data="data"
    :with-credentials="withCredentials"
    :http-request="httpRequest"
    @start="handleStart"
    @success="handleSuccess"
    @error="handleError"
    @progress="handleProgress"
  >
    <slot />
  </upload>

  <upload-list :files="uploadFiles" />
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, ref } from 'vue'

import Upload from './upload.vue'
import UploadList from './upload-list.vue'

import { NOOP } from '@vue/shared'
import { FileHandler, FileResultHandler, PoFile, UploadFile } from './upload.type'
import ajax from './ajax'

type PFileHandler<T> = PropType<FileHandler<T>>
type PFileResultHandler<T = any> = PropType<FileResultHandler<T>>

export default defineComponent({
  inheritAttrs: false,
  name: 'PoUpload',
  props: {
    fileList: { type: Array as PropType<UploadFile[]>, default: () => [] },
    beforeUpload: { type: Function as PropType<(file: File) => Promise<File | Blob> | boolean | unknown> },
    onRemove: { type: Function as PropType<(file: Nullable<FileList>, rawFile: File) => void> },
    httpRequest: {
      type: Function as PropType<typeof ajax> | PropType<(...args: unknown[]) => Promise<unknown>>,
      default: ajax,
    },
    // xhr 请求参数
    action: { type: String, required: true },
    name: { type: String },
    data: {
      type: Object as PropType<Record<string, any>>,
      default: () => null,
    },
    headers: { type: Object as PropType<Nullable<Partial<Headers>>>, default: null },
    withCredentials: { type: Boolean, default: false },
    onSuccess: {
      type: Function as PFileResultHandler,
      default: NOOP,
    },
    onProgress: {
      type: Function as PFileResultHandler<ProgressEvent>,
      default: NOOP,
    },
    onError: {
      type: Function as PFileResultHandler<Error>,
      default: NOOP,
    },
    onChange: {
      type: Function as PropType<FileHandler>,
      default: NOOP,
    },
  },
  components: { Upload, UploadList },
  setup(props) {
    let tempIndex = 1

    let uploadFiles = reactive(
      props.fileList.map(item => {
        item.uid = item.uid || Date.now() + tempIndex++
        item.status = item.status || 'success'
        return item
      }),
    )

    const getFile = rawFile => {
      const fileList = uploadFiles

      return fileList.find(file => file.uid === rawFile.uid)
    }

    const handleStart = (rawFile: PoFile) => {
      rawFile.uid = Date.now() + tempIndex++

      const file: UploadFile = {
        status: 'ready',
        name: rawFile.name,
        size: rawFile.size,
        percentage: 0,
        uid: rawFile.uid,
        raw: rawFile,
      }

      uploadFiles.push(file)
      console.log('file: handleStart', file)

      props.onChange(file, uploadFiles)
    }

    const handleProgress = (ev, rawFile) => {
      const file = getFile(rawFile)
      props.onProgress(ev, file, uploadFiles)
      file.status = 'uploading'
      file.percentage = ev.percent || 0
    }

    const handleSuccess = (res, rawFile) => {
      const file = getFile(rawFile)
      if (file) {
        file.status = 'success'
        file.response = res
        props.onSuccess(res, file, uploadFiles)
        props.onChange(file, uploadFiles)
      }
    }

    const handleError = (err, rawFile) => {
      const file = getFile(rawFile)
      const fileList = uploadFiles
      file.status = 'fail'
      fileList.splice(fileList.indexOf(file), 1)
      props.onError(err, file, uploadFiles)
      props.onChange(file, uploadFiles)
    }

    return {
      uploadFiles,
      handleStart,
      handleSuccess,
      handleProgress,
      handleError,
    }
  },
})
</script>
