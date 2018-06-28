const webpack = require('webpack')
const hmrPlugin = new webpack.HotModuleReplacementPlugin()
const merge = require('webpack-merge')

const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    hmrPlugin
  ]
})
