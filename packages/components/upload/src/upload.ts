import { UploadProps } from './upload.vue'

export type UploadStatus = 'ready' | 'success' | 'uploading' | 'fail'

export type UploadUserFile = Omit<UploadFile, 'status' | 'uid'> &
  Partial<Pick<UploadFile, 'status' | 'uid'>>

export interface UploadRawFile extends File {
  uid: number
}

export type UploadFile = {
  name: string
  percentage?: number
  status: UploadStatus
  size?: number
  response?: unknown
  uid: number
  url?: string
  raw?: UploadRawFile
}

export interface UploadAjaxError extends Error {
  status: number
  method: string
  url: string
}

export type UploadRequestOptions = {
  action: string
  data: Record<string, string | Blob>
  filename: string
  file: File
  headers: Headers | Record<string, any>
  onError: (e: Error) => void
  onProgress: (e: ProgressEvent) => void
  onSuccess: (response: XMLHttpRequestResponseType) => unknown
  withCredentials: boolean
}

export interface UploadProgressEvent extends ProgressEvent {
  percent: number
}

export type AjaxEventListener = (
  e: ProgressEvent,
  file: UploadRawFile
) => unknown

let fileId = 1
export const genFileId = () => Date.now() + fileId

export const useUpload = (props: UploadProps) => {}
