const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/js/app.js'),
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'build/js')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react']
        }
      }
    ]
  }
};
