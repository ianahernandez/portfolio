// vue.config.js
module.exports = {
  chainWebpack: config => {
    config
    .plugins.delete('prefetch')
    config
    .plugin('html')
    .tap(args => {
      args[0].title = 'Ana Hernández | Developer'
      return args
    })
    config
    .plugin('preload').tap((options) => {
      options[0].include = 'allChunks'
      return options
    })
    
  }
}
