import type { StorybookConfig } from "@storybook/vue3-vite";
import { join, dirname } from "path";
import tsconfigPaths from "vite-tsconfig-paths";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
  stories: ["../../../packages/vue/src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-interactions"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/vue3-vite"),
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  async viteFinal(config) {
    // 确保 Vue 相关的插件已加载
    const hasVue = config.plugins?.some((p: any) => p?.name === "vite:vue");
    if (!hasVue) {
      config.plugins?.push(vue());
      config.plugins?.push(vueJsx());
    }

    config.plugins?.push(tsconfigPaths());

    return config;
  },
};
export default config;
