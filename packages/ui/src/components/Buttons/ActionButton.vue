<template>
  <button
    :class="[
      { 'px-1.5 py-1': !!icon && !$slots.default },
      twMerge(
        'flex flex-nowrap items-center rounded-md font-semibold tracking-wide transition-all select-none focus-visible:outline-2 focus-visible:outline-offset-2',
        small ? 'px-1.5 py-1 text-xs' : 'px-2.5 py-1.5 text-sm',
        typeClasses,
        variantClasses,
        disabled ? 'cursor-default' : 'cursor-pointer',
        $props.class,
        $attrs.class as string,
      ),
    ]"
    :disabled
    :type="submit ? 'submit' : 'button'"
  >
    <Icon v-if="icon" :class="small ? 'size-4' : 'size-5'" :icon class="block aspect-square" />
    <span v-if="$slots.default" :class="{ 'not-empty:ms-1': icon }" class="inline-block whitespace-nowrap">
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">
import { ButtonType } from '@/components/Buttons/ButtonType';
import { ButtonVariant, getVariantClass } from '@/components/Buttons/ButtonVariant';
import type { ActionButtonProps } from '@/types/Buttons';
import { Icon } from '@iconify/vue';
import { twMerge } from 'tailwind-merge';
import { computed, type ComputedRef } from 'vue';

const props = withDefaults(defineProps<ActionButtonProps>(), {
  variant: ButtonVariant.Primary,
  type: ButtonType.Primary,
  icon: undefined,
  submit: false,
  disabled: false,
  small: false,
});

const typeClasses: ComputedRef<string> = computed((): string => {
  switch (props.type) {
    case ButtonType.Primary:
      return 'shadow-xs font-bold';
    case ButtonType.Secondary:
      return 'shadow-xs inset-ring-2';
    case ButtonType.Tertiary:
      return '';
    default:
      console.error('Invalid button type: ', props.type);
      throw new Error('Invalid button type');
  }
});

const variantClasses: ComputedRef<string> = computed((): string => {
  const variant = props.disabled ? ButtonVariant.Disabled : props.variant;
  const classes = getVariantClass(variant);

  switch (props.type) {
    case ButtonType.Primary:
      return twMerge(classes.shared, classes.primary);
    case ButtonType.Secondary:
      return twMerge(classes.shared, classes.secondary);
    case ButtonType.Tertiary:
      return twMerge(classes.shared, classes.tertiary);
    // Testing exceptions crashes storybook -_-
    /* v8 ignore next -- @preserve */
    default:
      throw new Error('Invalid button type');
  }
});
</script>
