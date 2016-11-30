var webpack = require('webpack');

var env ={};
env['process.env.NODE_ENV'] = JSON.stringify('production');

module.exports = {
  entry: './src',
  output: {
    path: '../ReactTutorial/static',
    filename: 'bundle.js'
  },
  externals: {
    'jquery': 'jQuery',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: __dirname,
      exclude: /node_modules/
    }]
  },
  plugins: [
    new webpack.DefinePlugin(env),
     new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
  ],
  resolve: {
    alias: {
      "react": "react-lite",
      "react-dom": "react-lite"
    }
  },
};
