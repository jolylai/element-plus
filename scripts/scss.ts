import { globby, $ } from 'zx'
;(async () => {
  const files = await globby('theme', {
    absolute: true,
    expandDirectories: {
      extensions: ['css', 'css.map'],
    },
  })

  for (let file of files) {
    await $`rm -rf ${file}`
  }
  console.log('files: ', files)
})()
