var path = require('path')
const webpack = require("webpack")
const ExtractTextPlugin = require('extract-text-webpack-plugin') // 剥离合并css
const HtmlWebpackPlugin = require('html-webpack-plugin'); //首先要引入
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackBar = require('webpackbar'); // 打包进度条
const optimizeCss = require('optimize-css-assets-webpack-plugin') // 压缩css
const UglifyJsPlugin = require('uglifyjs-webpack-plugin') // 压缩js

const { VueLoaderPlugin } = require('vue-loader');


var baseConfig = {
    devtool: 'cheap-module-eval-source-map',
    mode:'development', //development
    entry: {
        main: './src/index.js'
    },
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        // 'vue$': 'vue/dist/vue.esm.js',
        '@': path.resolve('src'),
        'static': path.resolve(__dirname, './src/static'),
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
      inline: true,
  　　 proxy: {
        '/api': {// '/api':匹配项
          target: 'http://m.baige.me/',// 接口的域名
  　　　　 // secure: false,// 如果是https接口，需要配置这个参数
          changeOrigin: true,// 如果接口跨域，需要进行这个参数配置
          // 如果接口本身没有/api需要通过pathRewrite来重写了地址
  　　　　　pathRewrite: {
  　　　　　   '^api': ''
          }
        }
      }
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
                test: /\.(woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader'
              },
              {
                  test: /\.vue$/,
                  loader: 'vue-loader',
                  options: {
                     loaders: {
                         css: ExtractTextPlugin.extract({
                             use: 'css-loader',
                             fallback: 'vue-style-loader'
                         })
                     }
                 }
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