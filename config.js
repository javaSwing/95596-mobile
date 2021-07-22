const pxtorem = require('postcss-pxtorem')

module.exports = {
  css: () => {
    return {
      loaderOptions: {
        postcss: {
          plugins: // add px2rem
            pxtorem({
              rootValue: 75,
              propList: ['*']
            })
        }
      }
    }
  }
}
