# Shared TSConfig files

This package contains a shared set of tsconfig files for use within packages and applications.

## Usage

### `app.json`

`app.json` is used for building and checking the browser code's typescript. It should be targeted at the `src/` or `resources/js` directory.

### `node.json`

`node.json` is used for building and validating typescript that's run either on a server or on the build machine / pipeline. It is run against config files (such as `vite.config.ts`) and any additional tooling that won't be run in a browser.

### `storybook.json`

`storybook.json` is used for building and validating storybook stories.

### `vitest.json`

`vitest.json` is used for building and validating vitest test code.