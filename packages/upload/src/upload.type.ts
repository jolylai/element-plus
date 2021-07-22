export type UploadStatus = 'ready' | 'success'

export type UploadFile = {
  name: string
  percentage?: number
  status: UploadStatus
  size: number
  response?: unknown
  uid: number
  url?: string
  raw: PoFile
}

export interface PoFile extends File {
  uid: number
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
  headers: Headers
  onError: (e: Error) => void
  onProgress: (e: ProgressEvent) => void
  onSuccess: (response: XMLHttpRequestResponseType) => unknown
  withCredentials: boolean
}

export interface UploadProgressEvent extends ProgressEvent {
  percent: number
}

export type AjaxEventListener = (e: ProgressEvent, file: PoFile) => unknown

export type FileHandler<T = void> = (file: UploadFile, uploadFiles: UploadFile[]) => T
export type FileResultHandler<T = any> = (param: T, file: UploadFile, uploadFiles: UploadFile[]) => void
