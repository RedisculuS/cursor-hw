const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode : "development",
    entry : "./src/index.js",
    output : {
        path : path.resolve(__dirname,"dist"),
        filename : 'main.js', 
    },
    module : {
        rules : [{
            test : /\.js$/,
            exclude : /node_modules/,
            loader : "babel-loader"
        }, {
            test : /\.css$/,
            use : ['style-loader','css-loader'],
        },{
           test : /\.(png|jpe?g|gif)$/,
           use: [
               { loader : 'file-loader',}
           ] 
        },{
            test : /\.(jpe?g|png|gif|svg)$/,
            use : [
                'url-loader?limit=10000',
                'img-loader'
            ]
        }]
    },
    plugins : [new HtmlWebpackPlugin()],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    }
}