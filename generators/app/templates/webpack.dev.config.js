/**
 *
 * @author keyy/1501718947@qq.com 17/3/8 19:53
 * @description
 */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/js/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js',
    chunkFilename: '[id].bundle.js',
    publicPath: '/'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader/useable', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
      },
      {
        test: /\.(js|jsx)$/,
        use: [
          'react-hot-loader',
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'react']
            }
          }
        ],
        exclude: /(node_modules)/
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)\w*/,
        use: ['file-loader']
      }
    ]
  },
  resolve: {
    modules: [
      path.resolve(__dirname, 'node_modules'),
      path.resolve(__dirname),
      path.resolve(__dirname, 'src/js', 'utils', 'lib')
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('common'),
    new HtmlWebpackPlugin({
      title: '<%= answers.name %>',
      description: '<%= answers.description %>',
      username: '<%= answers.username %>',
      filename: 'index.html',
      inject: 'body',
      template: 'index.html_vm',
      favicon: 'src/img/favicon.ico',
      hash: false
    })
  ]
};
