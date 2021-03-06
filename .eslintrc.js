module.exports = {
  'env': {
    'commonjs': true,
    'es6': true,
    'node': true,
    'jest': true
  },
  'extends': [
    'google',
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parserOptions': {
    'ecmaVersion': 2018,
  },
  'rules': {
    'indent': ["error", 4],
    'require-jsdoc': 0,
    'valid-jsdoc': 0,
    'no-multi-str': 0,
    'max-len': [2, 150]
  },
};
