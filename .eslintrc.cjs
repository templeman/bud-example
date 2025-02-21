module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  extends: ['@roots/eslint-config/wordpress'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  ignorePatterns: [
    'src/scripts/jquery.main.js',
    'src/scripts/our-trips-grid.js',
    'src/scripts/paragon.js'
  ],
  rules: {
    'space-before-function-paren': 'off',
    'array-callback-return': 'off',
    'no-multiple-empty-lines': 'off',
    semi: 'off',
    camelcase: 'off',
    'no-undef': 'off',
    'no-var': 'off',
    eqeqeq: 'off',
    'no-unused-vars': 'off',
    'padded-blocks': 'off',
    'no-empty': 'warn',
    'no-redeclare': 'warn',
    'no-unused-expressions': 'off',
    'no-mixed-operators': 'off',
    'no-sequences': 'warn',
    'brace-style': 'warn',
    'no-cond-assign': 'warn',
    'prefer-const': 'off',
    'no-useless-escape': 'off',
    'no-throw-literal': 'off',
    'prefer-regex-literals': 'off',
    'no-control-regex': 'off',
    'no-multi-spaces': 'off',
    'quote-props': 'off',
    'operator-linebreak': 'off',
    'one-var': 'off',
    'dot-notation': 'off'
  }
};
