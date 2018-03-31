var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
   entry: './src/main.js',
   output: {
      path: __dirname + '/dist',
      filename: 'bundle.js',
   },

   devServer: {
      inline: true,
      port: 7777
   },
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react']
            }
         },
         {
            test: /\.scss$/,
            loaders: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: ['css-loader', 'sass-loader']
            })
          }
      ]
   },

   plugins: [new HtmlWebpackPlugin({title: 'Homework React Version', template: 'src/index.html'}), new ExtractTextPlugin('style.css')]
}
module.exports = config;
