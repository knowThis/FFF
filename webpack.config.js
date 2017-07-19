/**
 * Created by knowthis on 2017/7/19.
 * auther website:http://zhouxianbao.cn
 */
var webpack = require('webpack');
var path = require('path');
var packageInfo = require('./package.json');


var version = packageInfo.version;
module.exports = {
    entry: {
        index: './index.js'
    },
    output: {
        filename: 'dist/FFF.zepto.' + version + '.min.js',
        library: 'FFF',
        libraryTarget: 'this'
    },
    resolve: {
        mainFields: ["node_modules", path.resolve(__dirname, "./"), './styles', '.'],
        modules: ["node_modules"],
        extensions: ['.js', '.json', '.css', '.png'],
        alias: {
            FFFBase: path.resolve(__dirname, 'src'),
            zepto$: path.resolve(__dirname, 'node_modules/webpack-zepto/index.js'),
            // zepto$: path.resolve(__dirname, 'node_modules/zepto/dist/zepto.js'),

        }
    },
    module: {
        rules: [{
                test: /\.less$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            root: '/',
                            url: false,
                            sourceMap: true
                        }
                    }, {
                        loader: "less-loader"
                    }],
                include: [
                    path.resolve(__dirname, "style")
                ]
            },
        ],
    },
    plugins: [
        // new webpack.ProvidePlugin({
        //     $: 'zepto',
        //     Zepto: 'zepto',
        //     'window.Zepto': 'zepto'
        // }),
    ]

};