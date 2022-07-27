import { ref, Ref, watchPostEffect } from 'vue'

export default function useSize(target: Ref<HTMLElement>) {
  const width = ref<number>(0)
  const height = ref<number>(0)

  const observer = new ResizeObserver((entries: ResizeObserverEntry[]) => {
    for (const entry of entries) {
      const { clientWidth, clientHeight } = entry.target

      width.value = clientWidth
      height.value = clientHeight
    }
  })

  watchPostEffect((onCleanup) => {
    observer.observe(target.value)

    onCleanup(() => {
      observer.disconnect()
    })
  })

  return { width, height }
}
