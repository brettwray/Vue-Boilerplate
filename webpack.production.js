const merge = require('webpack-merge');
const common = require('./webpack.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJsPlugin = require('terser-webpack-plugin');
const optimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');


module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimizer: [new TerserJsPlugin({}), new optimizeCSSAssetsPlugin({})],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
      chunkFilename: '[id].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              importLoaders: 2
            }
          },
          'sass-loader'
        ]
      }
    ]
  }
});