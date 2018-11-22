// @ts-check
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')

const { __workingDir } = require('./utils')

// plugin
const NodemonPlugin = require('nodemon-webpack-plugin')

const commonConfig = require('./webpack.common')

/** @type webpack.Configuration */
const devConfig = {
  mode: 'development',
  stats: 'errors-only',
  devtool: 'cheap-eval-source-map',
  plugins: [
    // @ts-ignore
    new NodemonPlugin()
  ]
}

module.exports = merge(commonConfig, devConfig)
