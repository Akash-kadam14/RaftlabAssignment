module.exports = {
  env: {
    browser: true,
    commonjs: true,
    node: true,
    es2021: true,
  },
  root: true,
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'max-len': ['error', 180],
    'class-methods-use-this': 0,
    'no-underscore-dangle': 0,
    'function-call-argument-newline': 0,
    'function-paren-newline': 0,
    'default-param-last': 0,
    'no-await-in-loop': 0,
    'import/no-extraneous-dependencies': 0,
    'linebreak-style': ['error', 'windows'],
    'no-plusplus': 0,
    'no-continue': 0,
    'no-restricted-syntax': 0,
  },
};
