var webpack = require("webpack");

webpack.config({
  entry: './src/app.js',
  output: './src/bundle.js',
  module {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  }
})
