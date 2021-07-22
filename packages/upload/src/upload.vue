<template>
  <div class="po-upload" @click="onClick">
    <slot />
    <input class="po-upload-input" ref="fileRef" type="file" @change="onFileChange" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import { NOOP } from '@vue/shared'
import { AjaxEventListener, PoFile } from './upload.type'
import ajax from './ajax'

export default defineComponent({
  name: 'Upload',
  props: {
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
      type: Function as PropType<AjaxEventListener>,
      default: NOOP as AjaxEventListener,
    },
    onError: {
      type: Function as PropType<AjaxEventListener>,
      default: NOOP as AjaxEventListener,
    },
  },
  setup(props) {
    // 缓存请求
    const reqs = ref({} as Indexable<XMLHttpRequest | Promise<any>>)

    const fileRef = ref()

    const onClick = () => {
      fileRef.value.click()
    }

    const onFileChange = e => {
      const files = e.target.files
      if (!files) {
        return
      }

      uploadFiles(files)
    }

    // 上传文件
    const uploadFiles = (files: FileList) => {
      let postFiles = Array.from(files)

      postFiles.forEach(rawFile => upload(rawFile as PoFile))
    }

    const upload = (rawFile: PoFile) => {
      if (!props.beforeUpload) {
        post(rawFile)
        return
      }

      const before = props.beforeUpload(rawFile)

      if (before instanceof Promise) {
        // todo
      } else if (before !== false) {
        post(rawFile)
      } else {
        props.onRemove(null, rawFile)
      }
    }

    // 调用 xhr 上传文件
    const post = (rawFile: PoFile) => {
      const { uid } = rawFile
      const options = {
        action: props.action,
        file: rawFile,
        data: props.data,
        headers: props.headers,
        filename: props.name,
        withCredentials: props.withCredentials,
        onProgress: e => {
          props.onProgress(e, rawFile)
        },
        onSuccess: res => {
          props.onSuccess(res, rawFile)
        },
        onError: err => {
          props.onError(err, rawFile)
          delete reqs.value[uid]
        },
      }

      const req = props.httpRequest(options)

      reqs.value[uid] = req

      if (req instanceof Promise) {
        req.then(options.onSuccess, options.onError)
      }
    }

    return {
      fileRef,
      onClick,
      onFileChange,
    }
  },
})
</script>
