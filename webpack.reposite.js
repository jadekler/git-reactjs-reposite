const path = require('path');

const config = {
  output: {filename: 'generated-app.js'},
  externals: {jquery: 'var jQuery'},
  context: __dirname,
  entry: ['./assets/javascripts/App'],
  resolve: {
    root: [path.join(__dirname, 'scripts'), path.join(__dirname, 'assets/javascripts')],
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', '.css', 'config.js']
  },
  module: {
    loaders: [],
  },
};

module.exports = config;
