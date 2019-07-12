const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: "development",
    entry:{app:["babel-polyfill",'./src/index.js']},
    output:{
        path: path.resolve(__dirname, './dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    module:{
        rules:[

            //CSS配置
            { test:/\.css$/,use:['style-loader','css-loader'] },
            { test:/\.less$/,use:['style-loader','css-loader','less-loader'] },
            { test:/\.scss$/,use:['style-loader','css-loader','sass-loader'] },
            //图片路径配置
            { test: /\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader?limit=1024&name=[hash:8]-[name].[ext]'},
            //字体配置
            { test: /\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'  } ,

            //babel配置
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                // include:[
                
                //   path.resolve('node_modules','vue-awesome')
                // ],
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
              },

              // {
              //   test:/\.js$/,
              //   loader: 'babel-loader',
              //   include:[/nodemodules\/vue-awesome/],
              // },
            // vue 配置
            {
                test: /\.vue$/,
                loader: 'vue-loader'
              },
            
        ]
    },
    optimization: {
            splitChunks: {       
              chunks: 'all'
            }
    },
    // externals: {//不打包的
    //     'vue': 'Vue',
    //     'vue-router': 'VueRouter',
    //     //'vuex': 'Vuex',
    //     // 'axios': 'axios',
    //     // 'echarts': 'echarts'
    //   },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        }),
        new VueLoaderPlugin()
    ],
    resolve:{
        alias:{
            'vue$':'vue/dist/vue.esm.js'
        }
    }
}