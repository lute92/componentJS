const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './src/js/glass.js'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'glass.js',
        publicPath: 'assets',
        library: 'glass',
        libraryTarget: 'window'

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
