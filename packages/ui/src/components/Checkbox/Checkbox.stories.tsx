import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  args: {
    label: "Checkbox",
    checked: false,
    disabled: false,
    indeterminate: false,
    error: false
  },
  argTypes: {
    onChange: { action: "changed" },
    icon: { control: false },
    indeterminateIcon: { control: false }
  },
  parameters: {
    docs: {
      description: {
        component: [
          "Custom checkbox with indeterminate state.",
          "",
          "**When to use**: multi-select lists or agreement steps.",
          "**When to avoid**: single mutually exclusive choice (use Radio).",
          "",
          "**Accessibility**: native input + label (clickable) and `aria-invalid`.",
          "**States**: hover, focus-visible, checked, indeterminate, disabled.",
          "",
          "**Tokens utilisés**:",
          "- `--ds-border-strong`, `--ds-border-system-danger`",
          "- `--ds-bg-brand-filled-default`, `--ds-bg-system-danger`",
          "- `--ds-opacity-disabled`"
        ].join("\n")
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Playground: Story = {
  render: (args) => {
    const [checked, setChecked] = React.useState(Boolean(args.checked));
    return (
      <Checkbox
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
      <Checkbox label="Default" />
      <Checkbox label="Hover (survolez)" />
      <Checkbox label="Checked" defaultChecked />
      <Checkbox label="Indeterminate" indeterminate />
      <Checkbox label="Focus visible" autoFocus />
      <Checkbox label="Disabled" disabled />
    </div>
  )
};
