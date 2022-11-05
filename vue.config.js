module.exports = {
  chainWebpack: config => {
      config
          .plugin('html')
          .tap(args => {
              args[0].title = "Canada's Human Rights 1945-Present";
              return args;
          })
  }
}