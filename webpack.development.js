const merge = require('webpack-merge');
const common = require('./webpack.config');

module.exports = merge(common, {
  mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
      contentBase: './dist',
      hot: true
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'vue-style-loader',
            {
              loader:'css-loader',
              options: {
                importLoaders: 1
              }
            },
            'postcss-loader'
          ]
        },
        {
          test: /\.scss$/,
          use: [
            'vue-style-loader',
            'css-loader',
            'sass-loader'
          ]
        },
      ]
    }
});