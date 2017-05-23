module.exports = {
  devtool: 'inline-source-map',
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.(css|scss)$/,
      loader: 'null-loader'
    }, {
      test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
      loader: 'file-loader'
    }, {
      test: /\.html$/,
      loader: 'raw-loader'
    }, {
      enforce: 'pre',
      test: /\.js$/,
      exclude: [
        /node_modules/,
        /\.spec\.js$/,
        /dev-server\.js/
      ],
      loader: 'istanbul-instrumenter-loader',
      query: {
        esModules: true
      }
    }]
  },
  devServer: {
    stats: 'minimal'
  }
};
