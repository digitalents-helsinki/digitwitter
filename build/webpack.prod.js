// @ts-check
const webpack = require('webpack')
const merge = require('webpack-merge')

const commonConfig = require('./webpack.common')

/** @type webpack.Configuration */
const prodConfig = {
  mode: 'production'
}

module.exports = merge(commonConfig, prodConfig)
