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
  },
  css: {
      loaderOptions: {
        postcss: {
          plugins: [
            require("postcss-px-to-viewport")({
              unitToConvert: "px",
              viewportWidth: 375,
              viewportHeight: 667,
              unitPrecision: 3,
              propList: [
                "*"
              ],
              viewportUnit: "vw",
              fontViewportUnit: "vw",
              selectorBlackList: [],
              minPixelValue: 1,
              mediaQuery: false,
              replace: true,
              exclude: [/(\/|\\)(node_modules)(\/|\\)/,/TabBarItem.vue$/],
            })
          ]
        }
      }
    }
}
