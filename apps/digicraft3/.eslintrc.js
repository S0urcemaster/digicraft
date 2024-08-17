module.exports = {
  extends: [
    //...
    'plugin:@next/next/recommended',
  ],

  rules: {
    semi: ['off', 'always'],
    quotes: ['off', 'always'],
    "no-undef": "off",
    "no-unused-vars": "off",
    "no-redeclare": "off",
  },
  globals: {
    window: true,
    module: true // [module].exports
  }
}
