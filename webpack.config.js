const MODE = 'development';
const path = require('path');

// ソースマップの利用有無(productionのときはソースマップを利用しない)
const enabledSourceMap = MODE === 'development';

module.exports = {
  mode: MODE,
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { url: false, sourceMap: enabledSourceMap },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: enabledSourceMap,
            },
          },
        ],
      },
    ],
  },
  entry: './src/js/index.js',
  devServer: {
    static: 'dist',
    host: '0.0.0.0',
    open: true,
  },
};
