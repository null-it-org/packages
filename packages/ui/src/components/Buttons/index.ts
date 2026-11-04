import { h } from 'vue';
import type { BaseButtonProps } from './BaseButton.vue';
import BaseButton from './BaseButton.vue';

export { default as BaseButton, type BaseButtonProps } from './BaseButton.vue';

type DefaultButtonType = Pick<BaseButtonProps, 'icon' | 'variant' | 'type'>;
const defaultButtons: Record<string, DefaultButtonType> = {
  DeleteButton: {
    icon: 'mdi:trash-can-outline',
    variant: 'destructive',
  },
  SyncButton: {
    icon: 'mdi:sync',
    variant: 'default',
  },
  SubmitButton: {
    type: 'submit',
    icon: 'mdi:content-save-outline',
    variant: 'positive'
  },
};

type Context = { attrs: Record<string, unknown>; slots: Array<unknown> };
function createButton(props: BaseButtonProps, context: Context, button: DefaultButtonType) {
  // @ts-expect-error Props aren't analyzed properly by ts
  return h(BaseButton, { ...props, ...button, ...context.attrs }, context.slots);
}

export const DeleteButton = (props: BaseButtonProps, context: Context) =>
  createButton(props, context, defaultButtons.DeleteButton);

export const SyncButton = (props: BaseButtonProps, context: Context) =>
  createButton(props, context, defaultButtons.SyncButton);

export const SubmitButton = (props: BaseButtonProps, context: Context) =>
  createButton(props, context, defaultButtons.SubmitButton);
