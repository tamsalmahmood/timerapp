module.exports = {
    root: true, 
    parserOptions: {
      ecmaVersion: 2020, 
      sourceType: 'module', 
      ecmaFeatures: {
        jsx: true 
      }
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    env: {
      jest: true,
      browser: true, 
      amd: true, 
      node: true 
    },
    extends: [
      'eslint:recommended',
      'eslint:recommended',
      'plugin:react/recommended',
      'prettier', // Add this
    ],
    plugins: ['prettier'], // Add this
    rules: {
        'prettier/prettier': 'error', // Ensure Prettier errors are flagged
    },
  }