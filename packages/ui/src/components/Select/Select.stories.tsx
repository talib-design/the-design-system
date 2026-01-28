import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Select";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
  args: {
    label: "Label",
    helperText: "Helper text",
    placeholder: "Placeholder",
    fullWidth: false,
    state: "default"
  },
  argTypes: {
    state: {
      control: "select",
      options: ["default", "hover", "active", "filled", "error", "disabled", "readonly"]
    },
    error: { control: "boolean" },
    filled: { control: "boolean" },
    disabled: { control: "boolean" },
    readOnly: { control: "boolean" },
    iconRight: { control: false },
    onChange: { action: "changed" }
  },
  parameters: {
    docs: {
      description: {
        component: [
          "Dropdown select based on tokenized input states.",
          "",
          "**When to use**: single selection from a list.",
          "**When to avoid**: multiple selection (use Checkbox group).",
          "",
          "**States**:",
          "- `default`, `hover`, `active`, `filled`, `error`, `disabled`, `readonly`",
          "- `disabled` ignores hover/active styles",
          "",
          "**Accessibility**:",
          "- `aria-invalid` on error, `aria-readonly` when readOnly.",
          "",
          "**Tokens utilisés**:",
          "- `--ds-input-*` for background, border, label, text, helper",
          "- `--ds-focus-ring-*`, `--ds-icon-brand`"
        ].join("\n")
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Playground: Story = {
  render: (args) => (
    <Select {...args}>
      <option value="option-1">Option 1</option>
      <option value="option-2">Option 2</option>
      <option value="option-3">Option 3</option>
    </Select>
  )
};

export const States: Story = {
  render: () => (
    <div className="grid gap-[var(--ds-space-4)]">
      <Select label="Default" placeholder="Placeholder" helperText="Helper text">
        <option value="option-1">Option 1</option>
        <option value="option-2">Option 2</option>
      </Select>
      <Select label="Hover" placeholder="Placeholder" helperText="Helper text" state="hover">
        <option value="option-1">Option 1</option>
        <option value="option-2">Option 2</option>
      </Select>
      <Select label="Active" placeholder="Placeholder" helperText="Helper text" state="active" />
      <Select label="Filled" helperText="Helper text" filled state="filled" defaultValue="option-1">
        <option value="option-1">Option 1</option>
        <option value="option-2">Option 2</option>
      </Select>
      <Select label="Error" helperText="Error message" error state="error">
        <option value="option-1">Option 1</option>
        <option value="option-2">Option 2</option>
      </Select>
      <Select label="Disabled" helperText="Helper text" disabled state="disabled">
        <option value="option-1">Option 1</option>
      </Select>
      <Select label="Readonly" helperText="Helper text" readOnly state="readonly">
        <option value="option-1">Option 1</option>
        <option value="option-2">Option 2</option>
      </Select>
    </div>
  )
};
