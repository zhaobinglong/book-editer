var path = require('path')
const webpack = require("webpack")
const ExtractTextPlugin = require('extract-text-webpack-plugin') // 剥离合并css
const HtmlWebpackPlugin = require('html-webpack-plugin'); //首先要引入
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackBar = require('webpackbar'); // 打包进度条
const optimizeCss = require('optimize-css-assets-webpack-plugin') // 压缩css
const UglifyJsPlugin = require('uglifyjs-webpack-plugin') // 压缩js
const VueLoaderPlugin = require('vue-loader/lib/plugin')

var baseConfig = {
    mode:'development', //development
    entry: {
        main: './src/index.js'
    },
    resolve: {
        // 自动补全的扩展名
        extensions: ['.js', '.vue', '.json'],
        alias: {
            '@': path.resolve('src'),
            // '@config': resolve('config'),
            // 'vue$': 'vue/dist/vue.common.js'
        }
    },
    output: {
        // publicPath:'http://cdn.com.cn', //注入打包后的html中的script标签前缀
        filename: '[name].[chunkHash:10].js',
        path: path.resolve('./build')
    },
    devServer: {
       port: 8000,
       host: '127.0.0.1',
       overlay: {
           errors: true,
       },
        contentBase: './src',
        inline: true
    },
    plugins: [
        new ExtractTextPlugin({
            filename: (getPath)=>{
                return getPath('css/[name].[chunkHash:5].css').replace("js","css")
            }
        }),
        new WebpackBar(),
        //new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin({
            try: false,
            watch: false
        }),
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        }),
        new optimizeCss(),
        new UglifyJsPlugin({
            test: /\.js($|\?)/i
        }),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
              {
                  test: /\.vue$/,
                  use: ['vue-loader']
              },
              {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  use: 'css-loader'
                })
              },
            {
              test:/\.js$/,
              exclude:/node_modules/,
              loader:'babel-loader',
              options:{
                 presets:['@babel/preset-env']
              }
            }
        ]
    }
}

module.exports = baseConfig