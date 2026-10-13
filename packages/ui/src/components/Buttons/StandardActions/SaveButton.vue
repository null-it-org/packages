<template>
  <NavigationButton v-bind="merge({}, Defaults, $attrs, $props)" :icon="Defaults.icon" :title="Defaults.title">
    <slot v-if="$slots.default" />
  </NavigationButton>
</template>

<script setup lang="ts">
import { NavigationButton } from '@/components';
import type { NavigationButtonProps } from '@/types';
import { merge } from 'lodash';
import { SaveButtonDefaults as Defaults } from './StandardActionDefaults';

defineProps<NavigationButtonProps>();
</script>
