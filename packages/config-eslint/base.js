import pluginVitest from '@vitest/eslint-plugin';
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting';
import { defineConfig } from 'eslint/config';

export default defineConfig(
  {
    ignores: [
      '.idea/**',
      '**/dist/**',
      '**/dist-ssr/**',
      '**/coverage/**',
      'vendor',
      'node_modules',
      'public',
      'bootstrap/ssr',
      'tailwind.config.js',
      'resources/js/components/ui/*',
      'resources/js/types/models.d.ts',
    ],
  },

  {
    ...pluginVitest.configs.recommended,
    files: ['src/**/__tests__/*'],
  },

  skipFormatting,

  {
    rules: {
      'vue/attributes-order': [
        'error',
        {
          order: [
            'DEFINITION',
            'LIST_RENDERING',
            'CONDITIONALS',
            'RENDER_MODIFIERS',
            'GLOBAL',
            ['UNIQUE', 'SLOT'],
            'TWO_WAY_BINDING',
            'OTHER_DIRECTIVES',
            'ATTR_DYNAMIC',
            'ATTR_STATIC',
            'ATTR_SHORTHAND_BOOL',
            'EVENTS',
            'CONTENT',
          ],
          alphabetical: true,
        },
      ],
      // Only disallow generic console.log, specific messages and debug info are allowed
      'no-console': ['error', { allow: ['warn', 'error', 'debug'] }],
    },
  },
);