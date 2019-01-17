const webpack = require('webpack')

module.exports = {
    entry: './transpiled/index.js',
    output: {
        path: __dirname + '/electron-dist/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
        ]
    }
}