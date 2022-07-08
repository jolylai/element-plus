import { useNamespace } from '@pomelo-plus/hooks'

export const useUploadList = () => {
  const ns = useNamespace('upload-list')

  const classes = [ns.b()]

  return { classes }
}
