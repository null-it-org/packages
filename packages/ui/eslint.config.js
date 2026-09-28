import packageConfig from '@packages/eslint/package';
import { defineConfig } from 'eslint/config';

export default defineConfig(packageConfig, {
  languageOptions: {
    parserOptions: {
      projectService: true,
      allowDefaultProject: true,
    },
  },
});
