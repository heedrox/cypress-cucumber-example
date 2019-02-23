module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  extends: [
    'airbnb-base'
  ],
  rules: {
    'import/prefer-default-export': 0,
    'linebreak-style': 0,
    'eslint linebreak-style': [0, 'error', 'windows'],
    'no-console': 0,
    'quotes': 0,
  },
  env: {
    "commonjs": true,
    "node": true,
    "mocha": true
  },
  globals: {
    "expect": true,
    "sinon": true,
    "cy": true,
    "Cypress": true,
  }
};
