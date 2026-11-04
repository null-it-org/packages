import type { LinkProps } from "storybook/internal/router";
import type { VNode } from "vue";

export type UiConfig = {
  renderLink: (link: LinkProps) => VNode
};