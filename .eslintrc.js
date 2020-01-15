module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect'
    }
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    '@typescript-eslint',
    'prettier'
  ],
  rules: {
    'react/jsx-filename-extension': 0,
    'react/jsx-props-no-spreading': 0,
    'import/no-named-default': 0,
    'import/no-named-as-default': 0,
    'import/prefer-default-export': 0,
    '@typescript-eslint/ban-ts-ignore': 0,
    'jsx-a11y/accessible-emoji': 0,
    'no-param-reassign': 0,
  },
};