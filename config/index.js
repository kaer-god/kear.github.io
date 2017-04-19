// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

var common_proxy = {
  //target       : 'http://test.hitour.cc',
  target       : 'http://sandbox.hitour.cc',
  // target       : 'http://sandbox.hitour.cc',
  //target       : 'http://hitour.local',
  changeOrigin : true,
  pathRewrite  : {}
};
var common_proxy2 = {
  //target       : 'http://test.hitour.cc',
  // target       : 'http://sandbox.hitour.cc',
  // target       : 'http://sandbox.hitour.cc',
  target       : 'http://test.hitour.cc',
  changeOrigin : true,
  pathRewrite  : {}
};

module.exports = {
  build : {
    env                      : require('./prod.env'),
    index                    : path.resolve(__dirname, '../index.html'),
    assetsRoot               : path.resolve(__dirname, '../dist'),
    assetsSubDirectory       : 'static',
    assetsPublicPath         : '/dist/',
    productionSourceMap      : true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip           : false,
    productionGzipExtensions : ['js', 'css']
  },
  dev   : {
    env                : require('./dev.env'),
    port               : 60011,
    assetsSubDirectory : 'static',
    assetsPublicPath   : '/',
    proxyTable         : {
      '/public/'  : common_proxy,
      '/product/'  : common_proxy,
      '/account/'  : common_proxy,
      '/flight/api/' : common_proxy,
      '/app/' : common_proxy,
      '/checkout/' : common_proxy,
      '/site/' : common_proxy,
      '/payGate/' : common_proxy,
      '/themes/' : common_proxy2
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap       : false
  }
}
