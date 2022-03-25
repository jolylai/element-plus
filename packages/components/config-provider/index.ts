import ConfigProvider from './config-provider'

ConfigProvider.install = app => {
  app.component(ConfigProvider.name, ConfigProvider)
}

export default ConfigProvider
