var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: [
            path.resolve(__dirname, '../src/assets/js/index.js')
        ]
    },
    output: {
        path: path.resolve(__dirname, '../test/assets'),
        filename: 'js/[name].[chunkhash].min.js',
        chunkFilename: "js/[name].[chunkhash].min.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: { presets: ['es2015'] },
                }],
            },
            {
                test: /\.(css|scss)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use:[
                        'css-loader',
                        {
                            loader: 'postcss-loader', 
                            options: { 
                                config: { path : 'build/postcss.config.js' }
                            } 
                        },  
                        'sass-loader'
                    ]
                })
            },
            {
                test: /\.(png|gif|jpg|svg)$/,
                use: [
                    {
                        loader:'url-loader',
                        options:{
                            limit:100,
                            name:'images/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("test")
            }
        }),
        //生成对应的CSS文件
        new ExtractTextPlugin('[name].[contenthash].css'),
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, '../test/index.html'),
            template: path.resolve(__dirname, '../src/index.ejs'),
            chunk:['main'],
            inject: 'body'
        })
    ],
    devtool: 'inline-source-map'
};