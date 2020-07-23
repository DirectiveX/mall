const path = require('path')
const resolve = dir => path.join(__dirname, dir)

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "assets": resolve('src/assets'),
        "common": resolve('src/common'),
        "components": resolve('src/components'),
        "network": resolve('src/network'),
        "views": resolve('src/views')
      }
    }
  }
}
