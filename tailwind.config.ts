import type { Config } from "tailwindcss";
import preset from "./packages/tokens/tailwind.preset";

const config: Config = {
  presets: [preset],
  content: [
    "./.storybook/**/*.{ts,tsx,mdx}",
    "./packages/ui/src/**/*.{ts,tsx,mdx}"
  ]
};

export default config;
