const path = require('path');

module.exports = {
  entry: __dirname,

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'script.js',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components|public)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/transform-runtime'],
          },
        },
      },
    ],
  },
};
