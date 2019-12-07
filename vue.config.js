const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  devServer: {
    port: 8080
  },

  chainWebpack: config => {
    config.resolve.alias
    .set('style', resolve('@/assets/style'))
  },

  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      },
      css: {},
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            remUnit: 20//根据设计图的大小变化，37.5或者75
          })
        ]
      }
    }
  },

  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  }
}
