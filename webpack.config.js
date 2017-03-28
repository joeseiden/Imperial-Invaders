const path = require('path');

module.exports = {
  entry: "lib/main.js",
  output: {
    path: path.resolve(__dirname, 'assets'),
    file: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};
