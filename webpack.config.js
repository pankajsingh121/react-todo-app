const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.(js|jsx)$/,
                loader: 'babel-loader'
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },

            {
                test: /\.(sa|sc|c)ss$/,                
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                          hmr: process.env.NODE_ENV === 'development',
                        },
                      },
                    //'style-loader',
                    'css-loader',
                   'sass-loader'
                    
                  ]
            }
        ]
    },
    plugins: [
       
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
          })
    ],
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        port: 3000,
        open: true        
      }
};