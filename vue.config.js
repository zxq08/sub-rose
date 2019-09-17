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
  }
}
