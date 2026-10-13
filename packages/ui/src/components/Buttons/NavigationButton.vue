<template>
  <Link
    v-if="props.href && !props.disabled"
    v-bind="props"
    :href="props.href ?? ''"
    :prefetch="typeof props.href === 'string'"
  >
    <ActionButton v-if="$slots.default" v-bind="{ ...props }">
      <slot />
    </ActionButton>

    <ActionButton v-else v-bind="{ ...props }" />
  </Link>

  <template v-else>
    <ActionButton v-if="$slots.default" v-bind="{ ...props }">
      <slot />
    </ActionButton>

    <ActionButton v-else v-bind="{ ...props }" />
  </template>
</template>

<script setup lang="ts">
import ActionButton from '@/components/Buttons/ActionButton.vue';
import type { NavigationButtonProps } from '@/types/Buttons';
import { Link } from '@inertiajs/vue3';

const props = defineProps<NavigationButtonProps>();
</script>
