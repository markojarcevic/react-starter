const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');

const projectRoot = path.resolve(__dirname, '../src');

module.exports = {
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        include: projectRoot,
        loader: 'eslint-loader',
      },
      {
        test: /\.js$/,
        include: projectRoot,
        loader: 'babel-loader',
      },
      {
        test: /\.svg$/,
        include: projectRoot,
        loader: 'svg-url-loader',
        options: {
          noquotes: true,
        },
      },
      {
        test: /\.(gif|png|jpe?g)$/i,
        include: projectRoot,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240,
            },
          },
          'image-webpack-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        include: projectRoot,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'fonts/',
        },
      },
    ],
  },
  resolve: {
    modules: [projectRoot, 'node_modules'],
    extensions: ['.json', '.js'],
    plugins: [
      new DirectoryNamedWebpackPlugin(),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './src/index.html',
    }),
  ],
};
