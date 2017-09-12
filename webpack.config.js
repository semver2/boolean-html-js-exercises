const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
      "./index.js"
    ],
    output: {
        path: __dirname + "/dist",
        filename: "index.bundle.js"
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            { test: /\.md$/, loaders: [ "html-loader", "markdown-loader" ] },
            { test: /\.scss$/,
              use: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  use: ['css-loader', 'sass-loader']
              })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css'),
        new HtmlWebpackPlugin({
          template: 'index.html',
          inject: 'body'
        })
    ],
    devtool: "eval-source-map",
    devServer: {
        filename: "index.bundle.js",
        contentBase: "./",
        port: 3000,
        publicPath: "/",
        stats: {
            colors: true
        }
    }
};
