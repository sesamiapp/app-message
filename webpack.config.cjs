const path = require('path')

const nodeConfig = {
  stats: {
    errorDetails: true
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    extensionAlias: {
      '.js' : ['.ts' , '.js' ],
      '.jsx': ['.tsx', '.jsx'],
      '.mjs': ['.mts', '.mjs']
    }
  },
  experiments: {
    outputModule: true
  },
  entry: {
    node: './src/index.ts'
  },
  target: 'node',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname) + '/build',
    chunkLoading: 'import',
    chunkFormat: 'module',
    library: {
      type: 'module'
    },
    globalObject: 'this'
  }
}
module.exports = [nodeConfig]
