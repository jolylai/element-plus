import Anchor from './src/index.vue'
import AnchorLink from './src/link.vue'

Anchor.install = app => {
  app.component('PoAnchor', Anchor)
  app.component('PoAnchorLink', AnchorLink)
}

export { Anchor, AnchorLink }

export default Anchor
