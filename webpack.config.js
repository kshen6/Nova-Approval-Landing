var path = require("path")
var webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const JS_URL = "./assets/js";
const SRC_URL = JS_URL + "/src";
const DEST_URL = JS_URL + "/dist";

module.exports = {
  context: __dirname,
// "react-router-dom", 
  entry: {
    app: SRC_URL + '/index', // entry point of our app. assets/ts/index.tsx should require other js modules and dependencies it needs
 /*vendor: ["react", "react-dom", "react-table", "react-csv", "react-jsonschema-form", "react-responsive-modal", 
            "lodash", "query-string",  "axios", "json-schema-deref-sync"]    
  */},

  output: {
      path: path.resolve(DEST_URL),
      filename: "[name].js"
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name:"vendor",
      filename:"vendor.bundle.js",
      minChunks: function(module) {
        return isExternal(module);
      }
    })
  ],

  module: {
    loaders: [
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
              presets: ['babel-preset-react'],
            }
            // loader: 'ts-loader'
        }, // to transform TSX into JS
        {
          test: /\.s?css$/,
          use: [ 'style-loader', 'css-loader', 'sass-loader' ]
          /*use: ExtractTextPlugin.extract({
            use: [ 'style-loader', 'css-loader', 'sass-loader' ]
          })*/
        },
        {
          test: /\.svg$/,
          loader: 'svg-url-loader'
        },
        {
            test: /\.(png|jpg)$/,
            loader: 'file-loader',
            options: {
                publicPath: "assets/js/dist/"
            }
        }
    ]
  },

  /*plugins: [
    new ExtractTextPlugin(DEST_URL + "/main.css"),
  ],*/

  resolve: {
    modules: ['node_modules', 'scripts'],
    extensions: ['.js', '.jsx', '.js']
  },
  node: {
    fs: "empty"
  }
}

function isExternal(module) {
  var context = module.context;

  if (typeof context !== 'string') {
    return false;
  }

  return context.indexOf('node_modules') !== -1;
}