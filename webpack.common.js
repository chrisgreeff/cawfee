require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const htmlPlugin = new HtmlWebPackPlugin({
  template: './assets/index.html'
})

module.exports = {
  entry: ['./assets/app/cawfee.tsx'],
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: {
        loader: 'ts-loader'
      }
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }, {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    }, {
      test: /\.(otf|ttf|eot|woff|woff2|svg)(\?v=\d+\.\d+\.\d+)?$/,
      use: {
        loader: 'file-loader'
      }
    }, {
      enforce: 'pre',
      test: /\.js$/,
      use: {
        loader: 'source-map-loader'
      }
    }]
  },
  plugins: [
    htmlPlugin
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    modules: [
      'node_modules',
      'assets/app',
      'assets/images',
      'assets/styles'
    ]
  },
  node: {
    fs: 'empty'
  }
}
