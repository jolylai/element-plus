<template>
  <upload
    :action="action"
    :name="name"
    :data="data"
    :with-credentials="withCredentials"
    :http-request="httpRequest"
    @success="handleSuccess"
    @error="onError"
    @progress="onProgerss"
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
import { AjaxEventListener, FileHandler, FileResultHandler, UploadFile } from './upload.type'
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
    onProgress: {
      type: Function as PropType<AjaxEventListener>,
      default: NOOP as AjaxEventListener,
    },
    onSuccess: {
      type: Function as PFileResultHandler,
      default: NOOP,
    },
    onError: {
      type: Function as PropType<AjaxEventListener>,
      default: NOOP as AjaxEventListener,
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

    const handleSuccess = (res, rawFile) => {
      const file = getFile(rawFile)

      if (file) {
        file.status = 'success'
        file.response = res
        props.onSuccess(res, file, uploadFiles)
        props.onChange(file, uploadFiles)
      }
    }

    return {
      uploadFiles,
      handleSuccess,
    }
  },
})
</script>
