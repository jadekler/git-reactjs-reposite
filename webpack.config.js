const path = require('path');
const config = require('./webpack.common.config');

module.output = {
  filename: 'generated-app.js',
  path: '.'
};

// load jQuery from cdn or rails asset pipeline
module.externals = {jquery: 'var jQuery'};

module.module.loaders.push(
  {test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader'},
  {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},

  // Next 2 lines expose jQuery and $ to any JavaScript files loaded after client-bundle.js
  // in the Rails Asset Pipeline. Thus, load this one prior.
  {test: require.resolve('jquery'), loader: 'expose?jQuery'},
  {test: require.resolve('jquery'), loader: 'expose?$'}
);
