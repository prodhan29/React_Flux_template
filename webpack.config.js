
var webpack = require('webpack');
var CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  //devtool: 'source-map',
  entry: "./src/main_script.js",
  module: {
    loaders:
      [{
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
        }
      }]
  },
  output: {
    path: "./production/",
    filename: "./bundle.js"
  },
  plugins: [   /*  VERY VERY IMPORTANT
                  files for optimizing the bundle.js.
                  without these plugins bundle.js will be a very large file
                */
      new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap:false }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),

  //   new webpack.DefinePlugin({
  //     'process.env': {
  //       // This has effect on the react lib size
  //       'NODE_ENV': JSON.stringify('development'),
  //     }
  //   }),
  //   new webpack.optimize.AggressiveMergingPlugin(),
  //   new webpack.optimize.OccurrenceOrderPlugin(),
  //   new webpack.optimize.DedupePlugin(),
  //   new webpack.optimize.UglifyJsPlugin({
  //     mangle: true,
  //     compress: {
  //       warnings: false, // Suppress uglification warnings
  //       pure_getters: true,
  //       unsafe: true,
  //       unsafe_comps: true,
  //       screw_ie8: true,
  //
  //       dead_code: true, // big one--strip code that will never execute
  //       drop_debugger: true,
  //       conditionals: true,
  //       evaluate: true,
  //       drop_console: true, // strips console statements
  //       sequences: true,
  //       booleans: true,
  //     },
  //     output: {
  //       comments: false,
  //     },
  //     exclude: [/\.min\.js$/gi] // skip pre-minified libs
  //   }),
  //   new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]),
  //   new CompressionPlugin({
  //     asset: "[path].gz[query]",
  //     algorithm: "gzip",
  //     test: /\.js$|\.css$|\.html$/,
  //     threshold: 10240,
  //     minRatio: 0
  //   })
  ]

};
/* IMPORTANT !!!!!!!!!!!!!!!!!!!!!!!!!!!!
    After development  please RUN webpack -p for the  minimized bundle.js.
    Otherwise you will be in trouble with a large budle.js file :p
*/
