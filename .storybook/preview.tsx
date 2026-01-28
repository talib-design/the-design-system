import * as React from "react";
import type { Preview } from "@storybook/react";
import theme from "./theme";
import "./preview.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on.*" },
    controls: { expanded: true },
    docs: { theme }
  },
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-[var(--ds-bg-page)] p-[var(--ds-space-4)] text-[var(--ds-text-primary)]">
        <Story />
      </div>
    )
  ]
};

export default preview;
