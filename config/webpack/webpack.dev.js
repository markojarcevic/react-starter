const webpack = require('webpack');
const postcssPresetEnv = require('postcss-preset-env');
const {
  src,
  themesPath,
  outputPath,
} = require('./paths');

module.exports = {
  mode: 'development',
  output: {
    filename: '[name].js',
    pathinfo: false,
  },
  devtool: 'eval-source-map',
  devServer: {
    clientLogLevel: 'none',
    contentBase: outputPath,
    compress: true,
    historyApiFallback: true,
    hot: true,
    open: true,
  },
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        include: src,
        loader: 'html-loader',
      },
      {
        test: /\.scss$/,
        include: src,
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
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              data: '@import "variables";',
              includePaths: [themesPath],
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
};
