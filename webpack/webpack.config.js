const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')

module.exports = () => {
  const env = process.env.NODE_ENV
  const envConfig = require(`./webpack.${env}.js`)
  const config = merge(commonConfig, envConfig)
  return config
}
