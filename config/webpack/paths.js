const path = require('path');

const root = path.resolve(__dirname, '../', '../');

module.exports = {
  root,
  src: path.resolve(root, 'src'),
  outputPath: path.resolve(root, 'dist'),
  templatePath: path.resolve(root, 'src/index.html'),
  themesPath: path.resolve(root, 'src/theme'),
  imagesFolder: 'images',
  fontsFolder: 'fonts',
};
