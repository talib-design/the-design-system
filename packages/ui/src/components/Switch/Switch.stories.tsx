import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./Switch";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  tags: ["autodocs"],
  args: {
    label: "Switch",
    checked: false,
    disabled: false
  },
  argTypes: {
    onChange: { action: "changed" }
  },
  parameters: {
    docs: {
      description: {
        component: [
          "Toggle control for binary settings.",
          "",
          "**When to use**: on/off preferences.",
          "**When to avoid**: immediate destructive actions.",
          "",
          "**Accessibility**: `role=\"switch\"` on input.",
          "**Disabled**: no hover/active interaction when disabled.",
          "",
          "**Tokens utilisés**:",
          "- `--ds-border-strong`, `--ds-border-brand`",
          "- `--ds-bg-brand-filled-default`, `--ds-bg-layer100`",
          "- `--ds-opacity-disabled`"
        ].join("\n")
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Playground: Story = {
  render: (args) => {
    const [checked, setChecked] = React.useState(Boolean(args.checked));
    return (
      <Switch
        {...args}
        checked={checked}
        onChange={(event) => {
          setChecked(event.target.checked);
          args.onChange?.(event);
        }}
      />
    );
  }
};

export const States: Story = {
  render: () => (
    <div className="grid gap-[var(--ds-space-3)]">
      <Switch label="Off" />
      <Switch label="On" checked />
      <Switch label="Focus visible" autoFocus />
      <Switch label="Disabled" disabled />
      <Switch label="Disabled On" checked disabled />
    </div>
  )
};
