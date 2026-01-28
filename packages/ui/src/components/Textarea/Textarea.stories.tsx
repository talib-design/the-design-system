import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./Textarea";

const meta: Meta<typeof Textarea> = {
  title: "Components/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  args: {
    label: "Label",
    placeholder: "Placeholder",
    helperText: "Helper text",
    fullWidth: false,
    state: "default",
    rows: 4
  },
  argTypes: {
    state: {
      control: "select",
      options: ["default", "hover", "active", "filled", "error", "disabled", "readonly"]
    },
    error: { control: "boolean" },
    filled: { control: "boolean" },
    disabled: { control: "boolean" },
    readOnly: { control: "boolean" }
  },
  parameters: {
    docs: {
      description: {
        component: [
          "Multi-line text input with tokenized states.",
          "",
          "**When to use**: paragraphs or longer feedback.",
          "**When to avoid**: single-line input (use Input).",
          "",
          "**States**:",
          "- `default`, `hover`, `active`, `filled`, `error`, `disabled`, `readonly`",
          "- `disabled` ignores hover/active styles",
          "",
          "**Accessibility**:",
          "- `aria-invalid` on error, `aria-describedby` for helper text.",
          "",
          "**Tokens utilisés**:",
          "- `--ds-input-*` for background, border, label, text, helper",
          "- `--ds-focus-ring-*`"
        ].join("\n")
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Playground: Story = {};

export const States: Story = {
  render: () => (
    <div className="grid gap-[var(--ds-space-4)]">
      <Textarea label="Default" placeholder="Placeholder" helperText="Helper text" />
      <Textarea label="Hover" placeholder="Placeholder" helperText="Helper text" state="hover" />
      <Textarea label="Active" placeholder="Placeholder" helperText="Helper text" state="active" />
      <Textarea
        label="Filled"
        helperText="Helper text"
        filled
        state="filled"
        defaultValue="Filled value"
      />
      <Textarea label="Error" helperText="Error message" error state="error" />
      <Textarea label="Disabled" helperText="Helper text" disabled state="disabled" />
      <Textarea label="Readonly" helperText="Helper text" readOnly state="readonly" />
    </div>
  )
};
