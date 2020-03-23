module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-comma-dangle': 'off',
    'no-param-reassign': 'off',
    'import/extensions': 'off',
    'no-nested-ternary': 'off',
    'consistent-return': 'off',
    'func-names': 'off',
    'array-callback-return': 'off',
    'no-unreachable': 'off',
    'no-useless-return': 'off',
    'quotes': 'off',
    'spaced-comment': 'off',
    'no-tabs': 'off',
    'no-bitwise': 'off',
    'no-plusplus': 'off',
    'no-underscore-dangle': 'off',
    'no-useless-escape': 'off',
    'operator-assignment': 'off',
    'no-restricted-globals': 'off',
    'no-else-return': 'off',
    'quote-props': 'off',
    'no-unused-vars': ['error', { 'args': 'none' }]
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
