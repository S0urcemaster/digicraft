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
    "no-mixed-spaces-and-tabs": "off",
    "no-redeclare": "off",
    "no-fallthrough": "off",
    "no-case-declarations": "off",
  },
  globals: {
    window: true,
    module: true // [module].exports
  }
}
