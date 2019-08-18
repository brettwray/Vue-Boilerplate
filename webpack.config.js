const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './site/app.js',
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.runtime.js',
      '@site': path.resolve(__dirname, 'site'),
      '@assets': path.resolve(__dirname, 'site/assets'),
      '@styles': path.resolve(__dirname, 'site/styles'),
      'Pages' : path.resolve(__dirname, 'site/components/pages')
    },
    extensions: ['.vue', '.js', '.scss', '.css']
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization : {
    moduleIds: 'hashed',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.vue/,
        use: [
          'vue-loader'
        ],
        include: path.resolve(__dirname, 'site')
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              '@babel/plugin-syntax-dynamic-import'
            ]
          }
        },
        exclude: file => (
          /node_modules/.test(file) &&
          !/\.vue\.js/.test(file)
        )
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'site/index.html'),
      filename: 'index.html'
    }),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin()
  ]
}