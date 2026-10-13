export enum ButtonVariant {
  Primary = 'Primary',
  Secondary = 'Secondary',
  Neutral = 'Neutral',
  Info = 'Info',
  Success = 'Success',
  Warning = 'Warning',
  Danger = 'Danger',
  Disabled = 'Disabled',
}

export function getVariantClass(variant: ButtonVariant): {
  shared: string;
  primary: string;
  secondary: string;
  tertiary: string;
  text: string;
} {
  switch (variant) {
    case ButtonVariant.Primary:
      return {
        shared: 'focus-visible:outline-primary-600 hover:shadow-primary-100 hover:shadow-lg',
        primary: 'bg-primary-400 text-white hover:bg-primary-500',
        secondary: 'text-primary-500 bg-primary-100/10 inset-ring-primary-300/80',
        tertiary: 'text-primary-500 hover:inset-ring-primary-200 hover:inset-ring-2',
        text: 'text-primary-500 hover:text-primary-600 active:text-primary-700 focus:text-primary-700',
      };
    case ButtonVariant.Secondary:
      return {
        shared: 'focus-visible:outline-secondary-600 hover:shadow-secondary-100 hover:shadow-lg',
        primary: 'bg-secondary-500 text-white hover:bg-secondary-400',
        secondary: 'text-secondary-600 bg-secondary-100/20 inset-ring-secondary-300',
        tertiary: 'text-secondary-500 hover:inset-ring-secondary-200 hover:inset-ring-2',
        text: 'text-secondary-500 hover:text-secondary-600 active:text-secondary-700 focus:text-secondary-700',
      };
    case ButtonVariant.Neutral:
      return {
        shared: 'focus-visible:outline-neutral-600 hover:shadow-neutral-100 hover:shadow-lg',
        primary: 'bg-neutral-500 text-white hover:bg-neutral-400',
        secondary: 'text-neutral-800 bg-neutral-100/50 inset-ring-neutral-300',
        tertiary: 'text-neutral-500 hover:inset-ring-neutral-200 hover:inset-ring-2',
        text: 'text-neutral-500 hover:text-neutral-600 active:text-neutral-700 focus:text-neutral-700',
      };
    case ButtonVariant.Info:
      return {
        shared: 'focus-visible:outline-info-600 hover:shadow-info-100 hover:shadow-lg',
        primary: 'bg-info-500 text-white hover:bg-info-400',
        secondary: 'text-info-500 bg-info-50/50 inset-ring-info-300',
        tertiary: 'text-info-500 hover:inset-ring-info-200 hover:inset-ring-2',
        text: 'text-info-500 hover:text-info-600 active:text-info-700 focus:text-info-700',
      };
    case ButtonVariant.Success:
      return {
        shared: 'focus-visible:outline-success-600 hover:shadow-success-100 hover:shadow-lg',
        primary: 'bg-success-500 text-white hover:bg-success-400',
        secondary: 'text-success-500 bg-success-100/10 inset-ring-success-300',
        tertiary: 'text-success-500 hover:inset-ring-success-200 hover:inset-ring-2',
        text: 'text-success-500 hover:text-success-600 active:text-success-700 focus:text-success-700',
      };
    case ButtonVariant.Warning:
      return {
        shared: 'focus-visible:outline-warning-600 hover:shadow-warning-100 hover:shadow-lg',
        primary: 'bg-warning-500 text-white hover:bg-warning-400',
        secondary: 'text-warning-800 bg-warning-100/50 inset-ring-warning-300',
        tertiary: 'text-warning-500 hover:inset-ring-warning-200 hover:inset-ring-2',
        text: 'text-warning-500 hover:text-warning-600 active:text-warning-700 focus:text-warning-700',
      };
    case ButtonVariant.Danger:
      return {
        shared: 'focus-visible:outline-danger-600 hover:shadow-danger-100 hover:shadow-lg',
        primary: 'bg-danger-400 text-white hover:bg-danger-500',
        secondary: 'text-danger-400 bg-danger-100/30 inset-ring-danger-300',
        tertiary: 'text-danger-400 hover:inset-ring-danger-200 hover:inset-ring-2',
        text: 'text-danger-500 hover:text-danger-600 active:text-danger-700 focus:text-danger-700 color-danger-500',
      };
    case ButtonVariant.Disabled:
      return {
        shared: 'focus-visible:outline-neutral-600',
        primary: 'bg-neutral-500 text-white',
        secondary: 'text-neutral-800 bg-neutral-100/50 inset-ring-neutral-300',
        tertiary: 'text-neutral-500',
        text: 'text-neutral-500',
      };
  }
}
