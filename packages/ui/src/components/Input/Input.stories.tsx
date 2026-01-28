import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  args: {
    label: "Label",
    placeholder: "Placeholder",
    helperText: "Helper text",
    optional: false,
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
    iconRight: { control: false }
  },
  parameters: {
    docs: {
      description: {
        component: [
          "Text input with label, helper text, and tokenized states.",
          "",
          "**When to use**: single-line text entry in forms.",
          "**When to avoid**: multi-line input (use Textarea).",
          "",
          "**States**:",
          "- `default`, `hover`, `active`, `filled`, `error`, `disabled`, `readonly`",
          "- `disabled` ignores hover/active styles",
          "",
          "**Accessibility**:",
          "- `aria-invalid` is set when `error` is true.",
          "- `aria-describedby` connects helper text.",
          "",
          "**Tokens utilisés**:",
          "- `--ds-input-*` state tokens for background, border, label, text, helper",
          "- `--ds-input-radius`, `--ds-input-padding-*`",
          "- `--ds-focus-ring-color`, `--ds-focus-ring-width`"
        ].join("\n")
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Playground: Story = {};

export const States: Story = {
  render: () => (
    <div className="grid gap-[var(--ds-space-4)]">
      <Input label="Default" placeholder="Placeholder" helperText="Helper text" />
      <Input label="Hover" placeholder="Placeholder" helperText="Helper text" state="hover" />
      <Input
        label="Active"
        placeholder="Placeholder"
        helperText="Helper text"
        state="active"
        autoFocus
      />
      <Input
        label="Filled"
        placeholder="Placeholder"
        helperText="Helper text"
        filled
        state="filled"
        defaultValue="Filled value"
      />
      <Input
        label="Error"
        placeholder="Placeholder"
        helperText="Error message"
        error
        state="error"
        aria-invalid="true"
      />
      <Input
        label="Disabled"
        placeholder="Placeholder"
        helperText="Helper text"
        disabled
        state="disabled"
      />
      <Input
        label="Readonly"
        placeholder="Placeholder"
        helperText="Helper text"
        readOnly
        state="readonly"
        defaultValue="Read only"
      />
    </div>
  )
};
