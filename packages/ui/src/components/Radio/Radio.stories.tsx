import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Radio } from "./Radio";
import { RadioGroup } from "./RadioGroup";

const meta: Meta<typeof Radio> = {
  title: "Components/Radio",
  component: Radio,
  tags: ["autodocs"],
  args: {
    label: "Radio",
    checked: false,
    disabled: false,
    name: "radio-group"
  },
  argTypes: {
    onChange: { action: "changed" }
  },
  parameters: {
    docs: {
      description: {
        component: [
          "Radio for single selection within a group.",
          "",
          "**When to use**: mutually exclusive choices.",
          "**When to avoid**: multiple selections (use Checkbox).",
          "**States**: hover, focus-visible, checked, disabled.",
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
type Story = StoryObj<typeof Radio>;

export const Playground: Story = {
  render: (args) => {
    const [value, setValue] = React.useState("option-a");
    return (
      <RadioGroup value={value} onValueChange={setValue} name="radio-playground">
        <Radio
          {...args}
          label="Option A"
          value="option-a"
          onChange={(event) => args.onChange?.(event)}
        />
        <Radio
          {...args}
          label="Option B"
          value="option-b"
          onChange={(event) => args.onChange?.(event)}
        />
      </RadioGroup>
    );
  }
};

export const Group: Story = {
  render: () => (
    <RadioGroup name="group-1" defaultValue="option-b">
      <Radio label="Option A" value="option-a" />
      <Radio label="Option B" value="option-b" />
      <Radio label="Hover (survolez)" value="option-hover" />
      <Radio label="Focus visible" value="option-focus" autoFocus />
      <Radio label="Option C" value="option-c" disabled />
    </RadioGroup>
  )
};
