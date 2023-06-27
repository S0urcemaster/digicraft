module.exports = {
  // extends: "@nighttrax/eslint-config-tsx",
  env: {
    browser: true,
    node: true,
    // es6: true,
    // commonjs: true,
  },
  parser: '@typescript-eslint/parser',
  extends: 'eslint:recommended',
  rules: {
    semi: ['off', 'always'],
    quotes: ['off', 'always'],
    "no-undef": "off",
  },
  globals: {
    window: true,
    module: true // [module].exports
  }
}
