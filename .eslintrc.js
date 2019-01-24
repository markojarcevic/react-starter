const path = require('path');

module.exports = {
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  extends: 'airbnb',
  globals: {
    window: true,
    document: true,
    localStorage: true,
    navigator: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['import', 'react'],
  root: true,
  rules: {
    /*
      0 or 'off' - turn the rule off
      1 or 'warn' - turn the rule on as a warning (doesn’t affect exit code)
      2 or 'error' - turn the rule on as an error (exit code is 1 when triggered)

      For a full list of rules and configuration options visit: https://eslint.org/docs/rules/
    */
    'comma-dangle': [1, 'always-multiline'],
    'comma-spacing': 1,
    'global-require': 0,
    'import/no-dynamic-require': 0,
    'import/no-extraneous-dependencies': [2, { devDependencies: true }],
    'indent': [1, 2],
    'key-spacing': 1,
    'max-len': [1, {
      code: 80,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
    }],
    'no-debugger': 1,
    'no-empty': 1,
    'no-extra-parens': [1, 'all', {
      enforceForArrowConditionals: false,
      ignoreJSX: 'multi-line',
      nestedBinaryExpressions: false,
    }],
    'no-extra-semi': 1,
    'no-multi-spaces': 1,
    'no-multiple-empty-lines': [1, { max: 1 }],
    'no-trailing-spaces': 1,
    'no-unused-vars': 1,
    'object-curly-spacing': 1,
    'padded-blocks': 1,
    'react/jsx-filename-extension': 0, // Project uses .js files
    'semi': 1,
    'quote-props': [1, 'consistent-as-needed'],
    'quotes': 1,
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: path.join(__dirname, 'config/webpack.common.js')
      }
    }
  },
};
