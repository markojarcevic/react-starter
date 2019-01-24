const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const postcssPresetEnv = require('postcss-preset-env');
const common = require('./webpack.common.js');

const projectRoot = path.resolve(__dirname, '../src');

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: '[name].js',
  },
  devtool: 'eval-source-map',
  devServer: {
    clientLogLevel: 'none',
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
    hot: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        include: projectRoot,
        loader: 'html-loader',
      },
      {
        test: /\.scss$/,
        include: projectRoot,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[local]--[hash:base64:5]',
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [postcssPresetEnv()],
            },
          },
          {
            loader: 'sass-loader',
            options: {
              data: '@import "variables";',
              includePaths: [path.resolve(__dirname, '../src/theme')],
              outputStyle: 'expanded',
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProgressPlugin(),
  ],
});
