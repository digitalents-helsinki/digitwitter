// @ts-check
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
// @ts-ignore
const pkg = require('../package.json')

// plugins
const WebpackBar = require('webpackbar')
const nodeExternals = require('webpack-node-externals')

const { __workingDir } = require('./utils')

/** @type webpack.Configuration */
const commonConfig = {
  name: 'app',
  target: 'node',
  entry: path.resolve(__workingDir, 'src/entry.js'),
  output: {
    filename: '[name].js',
    path: path.resolve(__workingDir, 'dist')
  },
  externals: [nodeExternals()],
  plugins: [new WebpackBar()],
  resolve: {
    alias: {
      '@': path.resolve(__workingDir, 'src')
    }
  }
}

module.exports = commonConfig
