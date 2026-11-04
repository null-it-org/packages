<template>
  <Button v-bind="props" :as="href?.length ? uiConfig.renderLink(props) : 'button'" :size="sizeProp" data-testid="base-button">
    <Icon v-if="iconProps" class="icon" v-bind="iconProps" data-testid="base-button-icon" />
    <slot data-testid="base-button-content" />
  </Button>
</template>

<script setup lang="ts">
import { inject, useSlots, type HTMLAttributes } from 'vue';
import type { ButtonVariants } from '../ui/button';
import Button from '../ui/button/Button.vue';
import type { LinkProps } from '@/types/LinkProps';
import { Icon, type IconifyIconProps } from '@iconify/vue';
import type { UiConfig } from '@/types/UiConfig';

const uiConfig: UiConfig = inject('uiConfig')!;

export type BaseButtonProps = {
  variant?: ButtonVariants['variant'];
  size?: ButtonVariants['size'];
  class?: HTMLAttributes['class'];
  icon?: string | IconifyIconProps;
  type?: HTMLButtonElement['type'];
} & Partial<LinkProps>;

const props = withDefaults(defineProps<BaseButtonProps>(), {
  variant: 'default',
  size: 'default',
});

let iconProps: IconifyIconProps | undefined = undefined;
let sizeProp: ButtonVariants['size'] = props.size;

if (props.icon) {
  iconProps = typeof props.icon === 'object' ? props.icon : { icon: props.icon };

  // If there is nothing in the default slot and we have an icon, button becomes square for icon
  if (!useSlots().default) {
    if (!sizeProp || sizeProp === 'default' || sizeProp.startsWith('icon')) {
      sizeProp = 'icon';
    } else {
      sizeProp = `icon-${sizeProp}` as ButtonVariants['size'];
    }
  }
}
</script>
