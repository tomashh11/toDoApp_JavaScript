const path = require('path');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js',
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, '../', 'build')
    },
    devServer: {
        open: true,
        // contentBase: path.resolve(__dirname, '../', 'public'),
        port: 3000
    },
    module: {
        rules: [
            // {
            // test: /\.txt$/,
            // use: 'raw-loader'
            // },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            // {
            //     test: /\.(sass|scss)$/,
            //     use: ['style-loader', 'css-loader', 'sass-loader']
            // },
            // {
            //     test: /\.(jpg|png|jpeg)$/,
            //     use: 'file-loader',
            // },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        ["@babel/preset-env", {
                            useBuiltIns: 'usage',
                            corejs: "2.0.0"
                        }]
                    ],
                    plugins: [
                        "@babel/plugin-proposal-class-properties"
                    ]
                }
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "src/index.html",
        }),
    ]
};

// "copy-webpack-plugin": "^5.0.4",

// "file-loader": "^4.2.0",
// "image-webpack-loader": "^6.0.0",
// "raw-loader": "^3.1.0",
// "node-sass": "^4.12.0",
// "sass-loader": "^8.0.0",