const path = require('path');
const webpack = require('webpack');

const ROOT_PATH = path.resolve(__dirname);
const SRC_PATH = path.resolve(ROOT_PATH, 'src');
const BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
    entry: {
        index: path.resolve(SRC_PATH, 'index.jsx')
    },
    output: {
        path: BUILD_PATH,
        filename: 'js/[name].[hash:5].js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.scss', '.css']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['eslint-loader'],
                include: SRC_PATH,
                enforce: 'pre'
            }, {
                test: /\.jsx?$/,
                loaders: ['babel-loader'],
                include: SRC_PATH,
                exclude: path.resolve(ROOT_PATH, 'node_modules')
            }, {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
            }, {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name]__[local]-[hash:5]',
                            importLoaders: 3,
                        },
                    },
                    'sass-loader',
                ],
            }, {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'images/[name].[hash:5].[ext]',
                        },
                    },
                ],
            }, {
                test: /\.json$/,
                loader: 'json-loader',
            }
        ]
    },
    plugins: [
        new webpack.DllReferencePlugin({
            manifest: require(path.resolve(ROOT_PATH, 'lib', 'manifest.json')),
            context: ROOT_PATH,
        })
    ]
};