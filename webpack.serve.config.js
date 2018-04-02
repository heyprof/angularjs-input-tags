const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: [
    './src/dev-server.js'
  ],
  output: {
    filename: '[name].js',
    sourceMapFilename: '[name].map'
  },
  mode: 'development',
  devtool: 'eval',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'eslint-loader',
      enforce: 'pre'
    }, {
      test: /\.(css|scss$)/,
      loaders: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
    }, {
      test: /\.(eot|svg|ttf|woff|woff2)$/,
      loader: 'file-loader?name=public/fonts/[name].[ext]'
    }, {
      test: /\.js$/,
      exclude: /(node_modules)/,
      loaders: [
        'ng-annotate-loader',
        'babel-loader'
      ]
    }, {
      test: /\.html$/,
      loaders: [
        'html-loader'
      ]
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({template: './src/dev-server.html'})
  ]
};
