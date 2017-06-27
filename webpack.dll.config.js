const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    ReactStuff: [
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'react-router-redux',
      'redux',
      'redux-actions',
    ],
    AntdStuff: [
      'antd',
      'moment',
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
