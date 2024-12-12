import globals from 'globals';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: { globals: globals.browser },
    rules: {
      'no-unused-vars': 'error',
      'prefer-const': 'error',
      eqeqeq: 'error',
    },
  },
];
