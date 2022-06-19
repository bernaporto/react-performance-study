module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      "jsx": true
    },
    project: ['tsconfig.json'],
    sourceType: 'module',
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  ignorePatterns: [
    'node_modules/**/*',
    'dist/**/*',
  ],
  plugins: [
    'import',
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'quotes': ['error', 'single'],
  },
};
