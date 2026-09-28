import { configureVueProject, defineConfigWithVueTs, vueTsConfigs } from "@vue/eslint-config-typescript";
import pluginVue from "eslint-plugin-vue";
import { config as baseConfig } from "./base";

configureVueProject({ rootDir: "resources/js" });

export default defineConfigWithVueTs(
    baseConfig,
    pluginVue.configs["flat/essential"],
    vueTsConfigs.recommendedTypeChecked,
);
