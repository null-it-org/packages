import * as organizeImports from 'prettier-plugin-organize-imports';
import * as tailwindcss from 'prettier-plugin-tailwindcss';

/**
 * @see https://prettier.io/docs/configuration
 * @type {import('prettier').Config}
 */
export default {
  arrowParens: 'avoid',
  printWidth: 120,
  quoteProps: 'consistent',
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  plugins: [organizeImports, tailwindcss],
  tailwindFunctions: ['clsx', 'cn', 'cva'],
};
