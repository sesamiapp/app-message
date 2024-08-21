const path = require('path');
// import path from 'path'

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    main: "./index.ts",
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'index.js',
    library: 'test',
    libraryTarget: 'window',
    libraryExport: 'default'
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      { 
        test: /\.tsx?$/,
        loader: "ts-loader"
      }
    ]
  }
};