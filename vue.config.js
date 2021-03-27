// vue.config.js
module.exports = {
  chainWebpack: config => {
    config
    .plugins.delete('prefetch')
    .plugin('html')
    .plugin('preload').tap((options) => {
      options[0].include = 'allChunks'
      return options
    })
    .tap(args => {
      args[0].title = 'Ana Hernández | Developer'
      return args
    })
  }
}
