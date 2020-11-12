const path=require('path');
const webpack=require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin}=require('clean-webpack-plugin');

module.exports={
    entry: './src/index.js',
    
    output: {
        path: path.resolve(__dirname, '../', 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },

    devServer: {
        contentBase: './dist'
    },
    
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader']
            },
            {
                test: /\.css$/i,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
            },
            {
                test: /\.(jpg|png)$/,
                use: {
                    loader: 'url-loader'
                }
            },
            {
                test: /\.(woff|woff2)$/,
                use: {
                    loader: 'url-loader'
                }
            },
            {
                test: /\.svg$/,
                use: {
                    loader: '@svgr/webpack'
                }
            }
        ]
    },
    
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Band Name',
            template: './src/index.html',
            favicon: './src/assets/favicon/favicon.ico'  
        })  
        
    ]
};
