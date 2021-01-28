const HtmlWebpackPlugin = require('html-webpack-plugin')

const babelRules = {
  test: /\.(js|jsx)$/,
  loader: 'babel-loader',
  exclude: /node_modules/,
};

module.exports = {
  entry: ['react-hot-loader/patch', './src/index.jsx'],
  module: {
    rules: [babelRules],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Bernardo Aguayo Portfolio',
      template: './public/index.html',
    }),
  ],
};
