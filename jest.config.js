const configPath = '<rootDir>/config/test';
const assetsExtensionsRegex = '\\.(png|svg|ttf|woff|woff2)$';
const stylesExtensionsRegex = '\\.scss$';

module.exports = {
  moduleDirectories: [
    'src',
    'node_modules',
  ],
  moduleFileExtensions: [
    'js',
  ],
  moduleNameMapper: {
    [assetsExtensionsRegex]: `${configPath}/fileMock.js`,
    [stylesExtensionsRegex]: 'identity-obj-proxy',
  },
  roots: [
    '<rootDir>/src',
  ],
  setupTestFrameworkScriptFile: `${configPath}/setupEnzyme.js`,
  snapshotSerializers: [
    'enzyme-to-json/serializer',
  ],
  testMatch: [
    '**/__tests__/*.test.js',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/src/theme',
  ],
};
