import type { Meta, StoryObj } from '@storybook/vue3-vite';

import BaseButton from './BaseButton.vue';
import { DeleteButton, SubmitButton, SyncButton } from '.';
import { sizes, variants } from '../ui/button';
import { expect } from 'storybook/test';

const meta: Meta<typeof BaseButton> = {
  component: BaseButton,
  argTypes: {
    variant: {
      options: Object.keys(variants),
      control: { type: 'radio' },
    },
    size: {
      options: Object.keys(sizes),
      control: { type: 'radio' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof BaseButton>;

export const Primary: Story = {
  render: args => ({
    components: { BaseButton, DeleteButton },
    setup() {
      return { args };
    },
    template:
      '<div class="flex gap-1">' +
      ' <BaseButton v-bind="args">Text</BaseButton>' +
      ' <BaseButton v-bind="args" icon="mdi:check">Icon text</BaseButton>' +
      ' <BaseButton v-bind="args" icon="mdi:check"/>' +
      '</div>',
  }),
  args: {
    variant: 'default',
    size: 'default',
  },
};

export const WithLink: Story = {
  ...Primary,
  args: {
    ...Primary.args,
    href: 'https://example.com',
    target: '_blank',
  },
  play: async ({ canvas, args }) => {
    const button = canvas.getAllByTestId('base-button')[0];
    await expect(button).toHaveAttribute('href', args.href);
  },
};

export const Delete: Story = {
  ...Primary,
  render: args => ({
    components: { Button: DeleteButton },
    setup() {
      return { args };
    },
    template:
      '<div class="flex gap-1">' +
      '  <Button v-bind="args">Icon text</Button>' +
      '  <Button v-bind="args"/>' +
      '</div>',
  }),
  args: {},
};

export const Sync: Story = {
  ...Delete,
  render: args => ({
    ...Delete.render(args),
    components: { Button: SyncButton },
  }),
};

export const Submit: Story = {
  ...Delete,
  render: args => ({
    ...Delete.render(args),
    components: { Button: SubmitButton },
  }),
};
