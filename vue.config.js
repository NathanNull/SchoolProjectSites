const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    module: {
      rules: [{ test:/\.txt/, use:"raw-loader" }]
    }
  },
  chainWebpack: config => config.plugin('html').tap(args => {
    args[0].title = "Government Reconciliation Efforts: Could They Be Doing More? | NewsWeb.Site"
    return args
  })
})
