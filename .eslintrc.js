module.exports = {
  env: {
    node: true,
    es6: true
  },
  extends: [
    './.eslintrc-auto-import.json',
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'vue/multi-word-component-names': 'off',
    'no-unused-vars': 'warn',
    'no-debugger': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    semi: ['error', 'never']
  },
  overrides: [
    {
      files: ['*.ts', '*.vue', '*.tsx'],
      rules: {
        'no-undef': 'off',
        endOfLine: 'off'
      }
    }
  ]
}
