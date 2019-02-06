const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssPresetEnv = require('postcss-preset-env');
const {
  root,
  src,
  themesPath,
  outputPath,
} = require('./paths');

module.exports = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        // sourceMap?
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        include: src,
        loader: 'html-loader',
        options: {
          minimize: true,
        },
      },
      {
        test: /\.scss$/,
        include: src,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[local]--[hash:base64:5]',
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
              includePaths: [themesPath],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin([outputPath], { root }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ],
};
