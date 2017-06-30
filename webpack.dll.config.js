const path = require('path')
const webpack = require('webpack')

const ROOT_PATH = path.resolve(__dirname);

const vendors = [
  'react',
  'react-dom',
  'react-redux',
  'react-router',
  'react-router-redux',
  'redux',
  'redux-actions',
  'antd',
  'moment',
];

module.exports = {
  entry: {
    vendor: vendors
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: '[name].dll.js',
    library: '[name]_lib',
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.resolve(ROOT_PATH, 'lib', 'manifest.json'), // manifest文件的输出路径
      name: '[name]_lib', // dll暴露的对象名，要跟output.library保持一致
      context: ROOT_PATH, // context是解析包路径的上下文
    }),
  ],
}
