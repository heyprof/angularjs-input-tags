/* eslint-disable quote-props */
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    'angularjs-input-tags': './src/input-tags.component.js',
    'angularjs-input-tags.min': './src/input-tags.component.js'
  },
  output: {
    filename: '[name].js',
    sourceMapFilename: '[name].map',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'nosources-source-map',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'eslint-loader',
      enforce: 'pre'
    }, {
      test: /\.scss$/,
      exclude: /node_modules/,
      loaders: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: [
        'ng-annotate-loader',
        'babel-loader'
      ]
    }, {
      test: /\.html$/,
      exclude: /node_modules/,
      loaders: [
        'html-loader'
      ]
    }]
  },
  plugins: [
    require('autoprefixer'),
    new CleanWebpackPlugin('dist/*'),
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true
    })
  ]
};
