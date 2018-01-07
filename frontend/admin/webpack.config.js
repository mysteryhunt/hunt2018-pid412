const path = require('path');

module.exports = {
  entry: ['babel-polyfill', './index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: [['env', {
              useBuiltIns: 'usage',
              targets: {
                browsers: '>1%',
              },
            }]],
          },
        },
      },
    ],
  },
};
