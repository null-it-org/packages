import { setup, type Preview } from '@storybook/vue3-vite';
import '@/style.css';
import UiComponents from '@';
import type { UiConfig } from '@/types/UiConfig';
import { INITIAL_VIEWPORTS } from 'storybook/viewport';

setup(app => {
  app.use(UiComponents, {} as UiConfig);
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    viewport: {
      options: {
        ...INITIAL_VIEWPORTS,
        '720p': {
          name: '720p',
          styles: {
            width: '1280px',
            height: '720px',
          },
        },
        '1080p': {
          name: '1080p',
          styles: {
            width: '1920px',
            height: '1080px',
          },
        },
        '1440p': {
          name: '1440p',
          styles: {
            width: '2560px',
            height: '1440px',
          },
        },
        '4k': {
          name: '4k',
          styles: {
            width: '3840px',
            height: '2160px',
          },
        },
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
};

export default preview;
