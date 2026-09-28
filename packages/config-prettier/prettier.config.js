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
  plugins: ['prettier-plugin-organize-imports', 'prettier-plugin-tailwindcss'],
  tailwindFunctions: ['clsx', 'cn', 'cva']
};
