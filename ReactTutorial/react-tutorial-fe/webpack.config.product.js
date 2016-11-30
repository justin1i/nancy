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
};
