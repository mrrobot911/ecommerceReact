module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
    'eslint:recommended',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  settings: {
    'import/resolver': {
      typescript: true,
      node: true,
    },
  },
  ignorePatterns: ['dist', 'vite.config.ts', 'tailwind.config.ts', 'vitest.config.ts'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', '@typescript-eslint', 'simple-import-sort', 'unused-imports', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
  overrides: [
    // override "simple-import-sort" config
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      rules: {
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              // Packages `react` related packages come first.
              ['^react', '^@?\\w'],
              // Internal packages.
              ['^(@|components)(/.*|$)'],
              // Side effect imports.
              ['^\\u0000'],
              // Parent imports. Put `..` last.
              ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
              // Other relative imports. Put same-folder imports and `.` last.
              ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
              // Style imports.
              ['^.+\\.?(css)$'],
            ],
          },
        ],
      },
    },
  ],
  rules: {
    'react-refresh/only-export-components': 'off',
    'react/jsx-no-constructed-context-values': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'react/react-in-jsx-scope': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'max-len': ['error', { code: 120, ignoreStrings: true }],
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'prettier/prettier': [
      'error',
      {
        printWidth: 120,
        endOfLine: 'lf',
        semi: true,
        tabWidth: 2,
        allowParens: 'always',
        jsxSingleQuote: true,
        singleQuote: true,
        trailingComma: 'all',
        plugins: ['prettier-plugin-tailwindcss'],
      },
    ],
  },
};
