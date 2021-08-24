import Avatar from './src/index.vue'

Avatar.name = 'PoAvatar'

Avatar.install = app => {
  app.component('PoAvatar', Avatar)
}

export default Avatar
