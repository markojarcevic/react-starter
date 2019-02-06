const HtmlWebpackPlugin = require('html-webpack-plugin');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');
const {
  fontsFolder,
  imagesFolder,
  src,
  templatePath,
} = require('./paths');

module.exports = {
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        include: src,
        loader: 'eslint-loader',
      },
      {
        test: /\.js$/,
        include: src,
        loader: 'babel-loader',
      },
      {
        test: /\.svg$/,
        include: src,
        loader: 'svg-url-loader',
        options: {
          noquotes: true,
        },
      },
      {
        test: /\.(gif|png|jpe?g)$/i,
        include: src,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240,
              outputPath: imagesFolder,
            },
          },
          'image-webpack-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        include: src,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: fontsFolder,
        },
      },
    ],
  },
  resolve: {
    modules: [src, 'node_modules'],
    extensions: ['.json', '.js'],
    plugins: [
      new DirectoryNamedWebpackPlugin(),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: templatePath,
    }),
  ],
};
