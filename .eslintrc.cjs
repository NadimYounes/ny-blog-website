module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:astro/recommended',
    'plugin:prettier/recommended'
  ],
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: { parser: '@typescript-eslint/parser' },
      rules: {}
    }
  ],
  ignorePatterns: ['dist/', 'node_modules/']
};
