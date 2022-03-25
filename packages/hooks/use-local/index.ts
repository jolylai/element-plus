import { computed, getCurrentInstance, inject, PropType, provide } from 'vue'

type TranslatePair = {
  [key: string]: string | string[] | TranslatePair
}

type Language = {
  name: string
  el: TranslatePair
}

type Translator = (...args: any[]) => string

export const useLocalProps = {
  locale: {},
  i18n: { type: Function as PropType<Translator> },
}

export const LocaleInjectionKey = 'PoLocaleInjection'

let localeObjCache

const template = (str: string, option) => {
  if (!str || !option) return str

  return str.replace(/\{(\w+)\}/g, (_, key) => {
    return option[key]
  })
}

export const useLocal = () => {
  const vm = getCurrentInstance()

  const props = vm.props as {
    locale: Language
    i18n: Translator
  }

  const locale = computed(() => props.locale)
  const lang = computed(() => locale.value.name)

  const _translator = (...args: any[]) => {
    const [path, option] = args
    let value
    const array = path.split('.')
    let current = locale.value
    for (let i = 0, j = array.length; i < j; i++) {
      const property = array[i]
      value = current[property]

      if (i === j - 1) {
        return template(value, option)
      }
      if (!value) return ''
      current = value
    }
  }

  const t = (...args: any[]) => {
    return props.i18n?.(...args) || _translator(...args)
  }

  const provides = {
    locale,
    lang,
    t,
  }

  localeObjCache = provides

  provide(LocaleInjectionKey, provides)
}

export const useLocalInject = () => {
  return inject(LocaleInjectionKey, localeObjCache)
}
