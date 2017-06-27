const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    ReactStuff: [
      'react',
      'react-dom',
      'react-router',
      'redux',
      'react-redux',
      'redux-actions',
    ],
    AntdStuff: [
      'antd'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: '[name].dll.js',
    library: '[name]_lib',
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.resolve(__dirname, 'lib', '[name]-manifest.json'),
      name: '[name]_lib',
    }),
  ],
}
