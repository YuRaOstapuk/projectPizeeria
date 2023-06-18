const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');


module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    devServer: {
        open: true,
        static: path.resolve(__dirname, 'build')
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: 'body',
            template: './src/index.html'
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }, 
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/i,
                use: 
                {
                    loader: 'file-loader',
                    options:
                    {
                        name: '[name].[ext]',
                        publicPath: './src/assets/',
                        outputPath: 'assets'
                    }
                }
            
            },

            {
                test: /\.ttf$/i,
                use: 
                [
                    {
                        loader: 'file-loader',
                        //type: 'asset/resource',
                        options:
                        {
                            name: '[name].[ext]',
                            publicPath: './src/assets/fonts',
                            outputPath: 'assets/fonts'
                        }
                    }
                ]
            }
        ]
    }
};






