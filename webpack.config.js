const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './src/js/app.js'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'app.js',
        publicPath: 'assets'

    },
    module : {
      loaders: [
        {
          test : /\.js$/,
          loader:'babel-loader',
          query:{
            presets:['es2015']
          }

        }

      ]
    }
}
