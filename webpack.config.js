const webpack = require('webpack')

module.exports = {
    entry: './ex/index.js',
    output: {
        path: __dirname + '/public',
        filename: './bundle.js'
    },
    devSever: {
        port: 8080,
        contentBase: './public',
    },
    module: {
        loaders: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
}
