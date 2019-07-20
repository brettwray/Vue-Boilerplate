const path = require('path')
const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const historyApiFallback = require('connect-history-api-fallback')

const app = express()

const config = require('./webpack.config')
const compiler = webpack(config)

app.use(historyApiFallback())

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  publicPath: config.output.publicPath
}))

app.use(
  webpackHotMiddleware(compiler, {
    log: console.log,
    path: "/__webpack_hmr",
    heartbeat: 10 * 1000
  })
)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log('[FRONT-END] listening on '+PORT)
})

