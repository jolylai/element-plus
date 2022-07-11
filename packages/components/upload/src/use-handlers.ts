import { getCurrentInstance, ref, watch } from 'vue'
import { genFileId, UploadFile, UploadRawFile } from './upload'
import { UploadContentProps } from './upload-content.vue'
import { UploadProps } from './upload.vue'

export const useHandler = (props: UploadProps) => {
  const { emit } = getCurrentInstance()
  const uploadFiles = ref<any[]>()

  const getFile = (rawFile: UploadRawFile): UploadFile => {
    return uploadFiles.value.find((file) => file.uid === rawFile.uid)
  }

  const handleStart: UploadContentProps['onStart'] = (file) => {
    const uploadFile: UploadFile = {
      name: file.name,
      percentage: 0,
      status: 'ready',
      size: file.size,
      uid: file.uid,
      raw: file,
    }

    uploadFiles.value.push(uploadFile)
    props.onChange(uploadFile, uploadFiles.value)
  }

  const handleProgress: UploadContentProps['onProgress'] = (event, rawFile) => {
    const file = getFile(rawFile)
    if (!file) return

    file.status = 'uploading'
    file.percentage = event.percent

    props.onProgress(event, file, uploadFiles.value)
    props.onChange(file, uploadFiles.value)
  }

  const handleSuccess = (response: any, rawFile: UploadRawFile) => {
    const file = getFile(rawFile)
    if (!file) return

    file.status = 'success'
    file.percentage = 100
    file.response = response

    props.onSuccess(response, file, uploadFiles.value)
    props.onChange(file, uploadFiles.value)
  }

  const handleError: UploadContentProps['onError'] = (error, rawFile) => {
    const file = getFile(rawFile)
    if (!file) return

    file.status = 'fail'
    props.onError(error, file, uploadFiles.value)
    props.onChange(file, uploadFiles.value)
  }

  const handleRemove = (file: UploadFile) => {
    const fileIndex = uploadFiles.value.indexOf(file)
    if (fileIndex > -1) {
      uploadFiles.value.splice(fileIndex, 1)
    }
  }

  watch(
    () => props.fileList,
    (fileList) => {
      uploadFiles.value = fileList || []
    },
    {
      deep: true,
      immediate: true,
    }
  )

  watch(
    uploadFiles,
    (files) => {
      for (const file of files) {
        file.uid = file.uid || genFileId()
        file.status = file.status || 'success'
      }

      emit('update:fileList', files)
    },
    { immediate: true, deep: true }
  )

  return {
    uploadFiles,
    getFile,
    handleStart,
    handleProgress,
    handleSuccess,
    handleError,
    handleRemove,
  }
}
