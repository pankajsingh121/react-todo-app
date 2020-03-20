const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
                test: /\.s[ac]ss$/i,                
                use: [
                    'style-loader',
                    'css-loader',
                   'sass-loader'
                      
                    
                  ],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx']
    }
};