const path = require('path');

var webpack = require('webpack');

var config  = {
    entry: './src/main.js',
    output: {
        filename: "bundle.js",
        path: __dirname + "/build/bundle"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};


module.exports = config;

