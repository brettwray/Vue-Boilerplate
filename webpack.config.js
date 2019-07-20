const path = require('path');
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')


module.exports = {
  mode: 'development',
  devtool: 'sourcemap',
  devServer: {
    watchOptions : {
      watch: true,
      aggregateTimeout: 200,
      poll: 1000
    }
  },
  entry: ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', './ui/site/entry.js'],
  output: {
    path: path.resolve(__dirname + '/dist'),
    publicPath: '/',
    filename: 'entry_bundle.js'
  },
  resolve : {
    extensions : ['.js', '.vue', '.json'],
    alias: {
      'vue$' : 'vue/dist/vue.runtime.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options : {
          hotReload: true
        }
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
              require('@babel/preset-env').default
              ],
              plugins: [
                require('@babel/plugin-syntax-dynamic-import').default
              ]
            }
          }
        ],
        exclude: file => (
          /node_modules/.test(file)
            && !/\.vue\.js/.test(file)
        )
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
             options : {
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: './'
              }
            }
          }, 
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader', 
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: './'
              }
            }
          }
        ]
      },
      {
        test: /\html$/,
        use: [{loader: "html-loader"}]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './ui/site/index.html',
      filename: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin()
  ]
};