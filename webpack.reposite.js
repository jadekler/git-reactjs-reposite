const path = require('path');

const config = {
  output: {filename: 'generated-app.js'},
  context: __dirname,
  entry: ['./assets/javascripts/App'],
  resolve: {
    root: [path.join(__dirname, 'scripts'), path.join(__dirname, 'assets/javascripts')],
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', '.css', 'config.js']
  },
  module: {
    loaders: [
      {test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: require.resolve('jquery'), loader: 'expose?jQuery'},
      {test: require.resolve('jquery'), loader: 'expose?$'}
    ],
  },
  externals: {
    fs: '{}',
    tls: '{}',
    net: '{}',
    console: '{}'
  }
};

module.exports = config;
