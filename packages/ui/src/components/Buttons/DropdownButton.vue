<template>
  <DropdownMenu>
    <DropdownMenuTrigger :class="cn('cursor-pointer select-none', $props.class)">
      <ActionButton :icon :type :variant>{{ label }}</ActionButton>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="mx-2 mb-2">
      <DropdownMenuItem
        v-for="option in options"
        :key="option.label"
        :class="getVariantClass(option.variant ?? ButtonVariant.Neutral).text"
        :data-dropdown-item-action="option.label"
        class="cursor-pointer"
      >
        <Link
          :as="option.href ? 'a' : 'button'"
          :href="option.href ?? ''"
          :method="option.method"
          :prefetch="typeof option.href === 'string'"
          class="cursor-pointer"
          @click="() => option.onClick"
        >
          <Icon
            v-if="option.icon"
            :class="getVariantClass(option.variant ?? ButtonVariant.Neutral).text"
            :icon="option.icon"
            class="mb-0.5 inline h-5 w-5"
          />
          {{ option.label }}
        </Link>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>

<script setup lang="ts">
import { ActionButton } from '@/components';
import { ButtonType } from '@/components/Buttons/ButtonType';
import { ButtonVariant, getVariantClass } from '@/components/Buttons/ButtonVariant';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { Icon } from '@iconify/vue';
import type { Method } from '@inertiajs/core';
import { Link } from '@inertiajs/vue3';
import type { HTMLAttributes } from 'vue';

export type DropdownButtonOption = {
  label: string;
  icon?: string;
  href?: string;
  method?: Method;
  onClick?: () => void;
  variant?: ButtonVariant;
};

export type DropdownButtonProps = {
  options: DropdownButtonOption[];
  icon?: string;
  label?: string;
  type?: ButtonType;
  variant?: ButtonVariant;
  class?: HTMLAttributes['class'];
};

withDefaults(defineProps<DropdownButtonProps>(), {
  icon: 'carbon:chevron-down',
  label: undefined,
  type: ButtonType.Secondary,
  variant: ButtonVariant.Neutral,
});
</script>
