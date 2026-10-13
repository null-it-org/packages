import type { ButtonType } from '@/components/Buttons/ButtonType';
import type { ButtonVariant } from '@/components/Buttons/ButtonVariant';
import type { IconifyIcon } from '@iconify/types';
import type { LinkProps } from 'storybook/internal/router';
import type { HTMLAttributes } from 'vue';

export type ActionButtonProps = {
  variant?: ButtonVariant;
  type?: ButtonType;
  icon?: IconifyIcon | string;
  submit?: boolean;
  disabled?: boolean;
  small?: boolean;
  class?: HTMLAttributes['class'];
  title?: string;
};

export type NavigationButtonProps = ActionButtonProps & LinkProps;
