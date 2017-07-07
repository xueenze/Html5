var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const babelLoaderConfig = {
  presets: ['es2015', 'stage-0', 'react'],
  plugins: [['antd', {'style': true, libraryName: 'antd-mobile'}]],
};

module.exports = {
  entry: {
      main:[
        'webpack-dev-server/client?http://0.0.0.0:8080',
        'webpack/hot/only-dev-server',
        'babel-polyfill',
        './src/app/index.jsx',
    ]
  },

  output: {
    path: __dirname + '/dist',
    filename: 'js/[name].build.js',
  },

  resolve: {
    modulesDirectories: ['node_modules', './src'],
    extensions: ['', '.web.js', '.json', '.js', '.jsx'],
  },

  module: {
    loaders: [  // 似乎react-hot-loader失效了
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel-loader?' + JSON.stringify(babelLoaderConfig)],
        exclude: /node_modules/,
      }, {
        test: /\.css$/,
        loader: 'style!css',
      }, {
        test: /\.less$/,
        loader: 'style!css!less',
      }, {
        test: /\.(png|jpg|svg)$/,
        loader: 'url?limit=25000&name=images/[name].[ext]',
      },
    ],
  },

  plugins: [
      new HtmlWebpackPlugin({
          filename: 'index.html',
          template: './src/index.html',
          chunk:['main'],
          inject: 'body'
      })
  ]
};
