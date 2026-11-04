import type { LinkProps } from "@/types/LinkProps";
import type { VNode } from "vue";

export type UiConfig = {
  renderLink: (link: Partial<LinkProps>) => VNode
};