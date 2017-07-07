var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: [
            'webpack-dev-server/client?http://localhost:15000',
            'webpack/hot/only-dev-server',
            path.resolve(__dirname, '../src/assets/js/index.js')
        ]
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/[name].js',
        chunkFilename: "js/[name].js"
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
                NODE_ENV: JSON.stringify("development")
            }
        }),
        //生成对应的CSS文件
        new ExtractTextPlugin('[name].css'),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, '../src/index.ejs'),
            chunk:['main'],
            inject: 'body'
        })
    ],
    devtool: 'inline-source-map'
};