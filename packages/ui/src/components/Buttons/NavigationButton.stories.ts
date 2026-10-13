import type { Meta, StoryObj } from '@storybook/vue3';
import { expect, within } from 'storybook/test';

import NavigationButton, { type NavigationButtonProps } from './NavigationButton.vue';

const meta: Meta<typeof NavigationButton> = {
  component: NavigationButton,
};

//👇 This default export determines where your story goes in the story list
export default meta;
type Story = StoryObj<typeof NavigationButton>;

export const Text: Story = {
  render: (args: NavigationButtonProps) => ({
    components: { NavigationButton },
    setup() {
      return { args };
    },
    template:
      `<div class="flex gap-2">` +
      '<NavigationButton data-testid="primary" type="Primary" href="#" v-bind="args">{{ args.default }}</NavigationButton>' +
      '<NavigationButton data-testid="secondary" type="Secondary" href="#" v-bind="args">{{ args.default }}</NavigationButton>' +
      '<NavigationButton data-testid="tertiary" type="Tertiary" href="#" v-bind="args">{{ args.default }}</NavigationButton>' +
      `</div>`,
  }),
  args: {
    default: 'Click me to navigate',
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const primary = canvas.getByTestId('primary');
    const secondary = canvas.getByTestId('secondary');
    const tertiary = canvas.getByTestId('tertiary');

    if (args.icon) {
      await expect(primary.querySelectorAll('svg')).toHaveLength(1);
      await expect(secondary.querySelectorAll('svg')).toHaveLength(1);
      await expect(tertiary.querySelectorAll('svg')).toHaveLength(1);
    } else {
      await expect(primary.querySelectorAll('svg')).toHaveLength(0);
      await expect(secondary.querySelectorAll('svg')).toHaveLength(0);
      await expect(tertiary.querySelectorAll('svg')).toHaveLength(0);
    }

    if (args.default) {
      await expect(primary).toHaveTextContent(args.default);
      await expect(secondary).toHaveTextContent(args.default);
      await expect(tertiary).toHaveTextContent(args.default);
    } else {
      await expect(primary).not.toHaveTextContent(args.default);
      await expect(secondary).not.toHaveTextContent(args.default);
      await expect(tertiary).not.toHaveTextContent(args.default);
    }
  },
};

export const IconWithText: Story = {
  ...Text,
  args: {
    default: 'Home',
    icon: 'mdi:home',
  },
};

export const Icon: Story = {
  ...IconWithText,
  render: (args: NavigationButtonProps) => ({
    ...IconWithText.render(args),
    template:
      '<NavigationButton data-testid="primary" class="mr-2" type="Primary" href="#" v-bind="args"/>' +
      '<NavigationButton data-testid="secondary" class="mr-2" type="Secondary" href="#" v-bind="args"/>' +
      '<NavigationButton data-testid="tertiary" type="Tertiary" href="#" v-bind="args"/>',
  }),
  args: {
    default: null,
    icon: 'mdi:home',
  },
};
