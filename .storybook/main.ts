import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";
import path from "path";

const config: StorybookConfig = {
  stories: [
    "../packages/ui/src/docs/**/*.mdx",
    "../packages/ui/src/docs/**/*.stories.@(ts|tsx)",
    "../packages/ui/src/components/**/*.stories.@(ts|tsx|mdx)"
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/addon-interactions"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  docs: {
    autodocs: "tag"
  },
  viteFinal: async (config) => {
    return mergeConfig(config, {
      resolve: {
        alias: {
          "@octo/ui": path.resolve(__dirname, "../packages/ui/src"),
          "@octo/tokens": path.resolve(__dirname, "../packages/tokens/src")
        }
      }
    });
  }
};

export default config;
