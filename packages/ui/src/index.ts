import { h, type App } from "vue";
import type { UiConfig } from "./types/UiConfig";

export default {
  install(app: App, config?: UiConfig): void {
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