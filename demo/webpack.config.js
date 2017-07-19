/**
 * Created by knowthis on 2017/7/19.
 * auther website:http://zhouxianbao.cn
 */
var webpack = require('webpack');
var path = require('path');



module.exports = {
    entry:{
        index:'./index.js'
    },
    output:{
        filename:'dist/index.min.js',
    },
    resolve: {
        mainFields: ["node_modules", path.resolve(__dirname, "./"), './styles','.'],
        modules: ["node_modules"],
        extensions: ['.js', '.json', '.css', '.png'],
        alias: {
            zepto$: path.resolve(__dirname, 'node_modules/webpack-zepto/index.js'),
        },
    },
    module: {
        rules: [

            {
                test: /\.css$/,
                use: [ 'style-loader',{
                    loader:'css-loader',
                    options: {
                        root: '/',
                        url: false,
                        sourceMap:true
                    }
                } ],
                include: [
                    path.resolve(__dirname, "styles"),
                    path.resolve(__dirname, "node_modules"),
                ]
            },
        ],
    },

};