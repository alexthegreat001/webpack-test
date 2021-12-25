const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, './src/app/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Restaurant Page',
            template: './src/public/index.html',
            filename: 'index.html'
        }),
    ],
    devServer: {
        static: './dist',
        watchFiles: ["src/**/*"],
    },
}