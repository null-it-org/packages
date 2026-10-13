import type { Meta, StoryObj } from '@storybook/vue3';

import { ButtonType } from './ButtonType';
import { ButtonVariant } from './ButtonVariant';
import DropdownButton from './DropdownButton.vue';

const meta: Meta<typeof DropdownButton> = {
  component: DropdownButton,
};

//👇 This default export determines where your story goes in the story list
export default meta;
type Story = StoryObj<typeof DropdownButton>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: args => ({
    components: { DropdownButton },
    setup() {
      return { args };
    },
    template: '<DropdownButton v-bind="args" />',
  }),
  args: {
    options: [
      {
        label: 'Option 1',
        icon: 'carbon:edit',
      },
      {
        label: 'Option 2',
        icon: 'carbon:trash-can',
      },
    ],
  },
};

export const WithText: Story = {
  ...Primary,
  args: {
    ...Primary.args,
    label: 'Actions',
  },
};

export const Colours: Story = {
  ...Primary,
  args: {
    ...Primary.args,
    label: 'Actions',
    type: ButtonType.Primary,
    variant: ButtonVariant.Secondary,
    options: [
      {
        label: 'Option 1',
        icon: 'carbon:edit',
        type: ButtonType.Primary,
        variant: ButtonVariant.Success,
      },
      {
        label: 'Option 2',
        icon: 'carbon:trash-can',
        type: ButtonType.Secondary,
        variant: ButtonVariant.Danger,
      },
      {
        label: 'Option 3',
        icon: 'carbon:add',
        type: ButtonType.Tertiary,
        variant: ButtonVariant.Info,
      },
    ],
  },
};
