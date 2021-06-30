const fileReg = /.(md|entry)$/

const createDemoPlugin = () => {
  const naiveDemoVitePlugin = {
    name: 'demo-vite',
    transform(_, id) {
      if (fileReg.test(id)) {
        return getTransformedVueSrc(id)
      }
    },
    async handleHotUpdate(ctx) {
      const { file } = ctx
      if (fileReg.test(file)) {
      }
    },
  }
}
