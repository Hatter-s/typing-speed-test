import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

// Define your style here so it applies everywhere, guaranteed.
const prettierOptions = {
  singleQuote: true, // <--- The most important fix
  semi: true,
  tabWidth: 2,
  trailingComma: 'all',
  printWidth: 100,
  bracketSpacing: true,
  endOfLine: 'auto',
};

export default tseslint.config(
  { ignores: ['dist'] },

  // 1. MAIN APP CONFIG (Browser)
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended, prettierConfig],
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier: prettier,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      // We pass the options directly to the rule
      'prettier/prettier': ['error', prettierOptions],
    },
  },

  // 2. CONFIG FILES (Node.js) - like vite.config.ts
  {
    files: ['vite.config.ts', 'eslint.config.js'],
    languageOptions: {
      globals: globals.node,
    },
    plugins: {
      prettier: prettier,
    },
    rules: {
      // We pass the exact same options here too
      'prettier/prettier': ['error', prettierOptions],
    },
  },
);
