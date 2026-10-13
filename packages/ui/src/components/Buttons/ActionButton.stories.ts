import type { Meta, StoryObj } from '@storybook/vue3';

import { ButtonType } from '@/components/Buttons/ButtonType.ts';
import { ButtonVariant } from '@/components/Buttons/ButtonVariant.ts';
import { expect, within } from 'storybook/test';
import ActionButton, { type ActionButtonProps } from './ActionButton.vue';

const meta: Meta<typeof ActionButton> = {
  component: ActionButton,
  render: (args: ActionButtonProps) => ({
    components: { ActionButton },
    setup() {
      return { args };
    },
    template: `<ActionButton v-bind="args" class="mr-2">{{ args.default }}</ActionButton>`,
  }),
  args: {
    default: 'Click me',
  },
  argTypes: {
    default: {
      control: 'text',
      default: 'Click me',
    },
    icon: {
      control: 'text',
      default: 'mdi:home',
    },
    type: {
      description: 'The type of button',
      control: 'select',
      options: [ButtonType.Primary, ButtonType.Secondary, ButtonType.Tertiary],
      default: ButtonType.Primary,
    },
    variant: {
      description: 'The colour variant',
      control: 'select',
      options: [
        ButtonVariant.Primary,
        ButtonVariant.Secondary,
        ButtonVariant.Neutral,
        ButtonVariant.Info,
        ButtonVariant.Success,
        ButtonVariant.Warning,
        ButtonVariant.Danger,
        ButtonVariant.Disabled,
      ],
      default: ButtonVariant.Primary,
    },
  },
};

export default meta;
type Story = StoryObj<typeof ActionButton>;

export const Text: Story = {
  render: (args: ActionButtonProps) => ({
    components: { ActionButton },
    setup() {
      return { args };
    },
    template:
      `<div class="flex gap-2">` +
      `<ActionButton data-testid="primary" type="Primary" v-bind="args">{{ args.default }}</ActionButton>` +
      `<ActionButton data-testid="secondary" type="Secondary" v-bind="args">{{ args.default }}</ActionButton>` +
      `<ActionButton data-testid="tertiary" type="Tertiary" v-bind="args">{{ args.default }}</ActionButton>` +
      `</div>`,
  }),
  args: { variant: ButtonVariant.Primary },
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
    variant: ButtonVariant.Primary,
    icon: 'mdi:home',
  },
};

export const Icon: Story = {
  ...Text,
  render: (args: ActionButtonProps) => ({
    ...Text.render(args),
    template:
      `<div class="flex gap-2">` +
      `<ActionButton data-testid="primary" type="Primary" v-bind="args"/>` +
      `<ActionButton data-testid="secondary" type="Secondary" v-bind="args"/>` +
      `<ActionButton data-testid="tertiary" type="Tertiary" v-bind="args"/>` +
      `</div>`,
  }),
  args: {
    variant: ButtonVariant.Primary,
    icon: 'mdi:home',
    default: null,
  },
};

export const SmallText: Story = {
  ...Text,
  args: {
    ...Text.args,
    small: true,
  },
};

export const SmallIconWithText: Story = {
  ...IconWithText,
  args: {
    ...IconWithText.args,
    small: true,
  },
};

export const SmallIcon: Story = {
  ...Icon,
  args: {
    ...Icon.args,
    small: true,
  },
};

export const Secondary: Story = {
  ...IconWithText,
  args: { variant: ButtonVariant.Secondary },
};

export const Neutral: Story = {
  ...IconWithText,
  args: { variant: ButtonVariant.Neutral },
};

export const Info: Story = {
  ...IconWithText,
  args: { variant: ButtonVariant.Info },
};

export const Success: Story = {
  ...IconWithText,
  args: { variant: ButtonVariant.Success },
};

export const Warning: Story = {
  ...IconWithText,
  args: { variant: ButtonVariant.Warning },
};

export const Danger: Story = {
  ...IconWithText,
  args: { variant: ButtonVariant.Danger },
};

export const Disabled: Story = {
  ...IconWithText,
  args: { variant: ButtonVariant.Disabled },
};
