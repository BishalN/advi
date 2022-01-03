const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  plugins: [new MiniCssExtractPlugin()],
  entry: './src/index.tsx',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: {
      name: 'advinow-component',
      type: 'umd'
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
      {
        test: /\.tsx?$/,
        use: ['babel-loader', 'ts-loader'],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts']
  },
  externals: {
    react: 'react'
  }
}
