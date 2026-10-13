import { ButtonType } from '@/components/Buttons/ButtonType.ts';
import { ButtonVariant } from '@/components/Buttons/ButtonVariant.ts';
import { useI18next } from '@/composables/UseComponentsI18next.ts';
import type { NavigationButtonProps } from '@/types';

const i18next = useI18next();

export type DefaultButtonProps = Omit<NavigationButtonProps, 'title'> & { title: string };

export const SyncButtonDefaults: DefaultButtonProps = {
  type: ButtonType.Primary,
  variant: ButtonVariant.Secondary,
  submit: false,
  title: i18next.t('components:actions.sync_title'),
  icon: 'carbon:arrows-vertical',
};

export const SettingsButtonDefaults: DefaultButtonProps = {
  type: ButtonType.Primary,
  variant: ButtonVariant.Secondary,
  submit: false,
  title: i18next.t('components:actions.settings_title'),
  icon: 'carbon:settings',
};

export const SaveButtonDefaults: DefaultButtonProps = {
  type: ButtonType.Primary,
  variant: ButtonVariant.Success,
  submit: false,
  title: i18next.t('components:actions.save_title'),
  icon: 'carbon:save',
};

export const EditButtonDefaults: DefaultButtonProps = {
  type: ButtonType.Primary,
  variant: ButtonVariant.Primary,
  submit: false,
  title: i18next.t('components:actions.edit_title'),
  icon: 'carbon:edit',
};

export const DeleteButtonDefaults: DefaultButtonProps = {
  type: ButtonType.Primary,
  variant: ButtonVariant.Danger,
  submit: false,
  title: i18next.t('components:actions.delete_title'),
  icon: 'carbon:trash-can',
};

export const CancelButtonDefaults: DefaultButtonProps = {
  type: ButtonType.Primary,
  variant: ButtonVariant.Danger,
  submit: false,
  title: i18next.t('components:actions.cancel_title'),
  icon: 'carbon:close-outline',
};

export const CloneButtonDefaults: DefaultButtonProps = {
  type: ButtonType.Primary,
  variant: ButtonVariant.Secondary,
  submit: false,
  title: i18next.t('components:actions.clone_title'),
  icon: 'carbon:copy',
};

export const AddButtonDefaults: DefaultButtonProps = {
  type: ButtonType.Primary,
  variant: ButtonVariant.Secondary,
  submit: false,
  title: i18next.t('components:actions.add_title'),
  icon: 'carbon:add',
};

export const ReloadButtonDefaults: DefaultButtonProps = {
  type: ButtonType.Primary,
  variant: ButtonVariant.Info,
  submit: false,
  title: i18next.t('components:actions.reload_title'),
  icon: 'mdi:reload',
};

export const ConnectButtonDefaults: DefaultButtonProps = {
  type: ButtonType.Primary,
  variant: ButtonVariant.Info,
  submit: false,
  title: i18next.t('components:actions.connect_title'),
  icon: 'carbon:link',
};
