import { h, type App } from "vue";
import type { UIConfig } from "./types/UIConfig";

export default {
  install(app: App, config?: UIConfig): void {
    config = {
      renderLink(link) {
        return h('a', link)
      },
      ...(config ?? {})
    }

    app.config.globalProperties.uiConfig = config;
    app.provide('uiConfig', config);
  }
}