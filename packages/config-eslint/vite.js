import { configureVueProject, defineConfigWithVueTs, vueTsConfigs } from "@vue/eslint-config-typescript";
import pluginVue from "eslint-plugin-vue";
import baseConfig from "@packages/eslint/base";

configureVueProject({ rootDir: "src" });

export default defineConfigWithVueTs(
    baseConfig,
    pluginVue.configs["flat/essential"],
    vueTsConfigs.recommendedTypeChecked,
);
