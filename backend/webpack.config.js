const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
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
  plugins: [
    new webpack.DefinePlugin({
      HUNT_APP_NAME: '"tpmh"',
    }),
  ],
};
