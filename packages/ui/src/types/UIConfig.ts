import type { LinkProps } from "storybook/internal/router";
import type { VNode } from "vue";

export type UIConfig = {
  renderLink: (link: LinkProps) => VNode
};