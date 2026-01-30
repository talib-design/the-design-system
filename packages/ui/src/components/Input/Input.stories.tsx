import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { Button } from "../Button/Button";

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
    iconLeft: { control: false },
    iconRight: { control: false },
    addonLeft: { control: false },
    addonRight: { control: false },
    suffix: { control: false }
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

export const Variations: Story = {
  render: () => (
    <div className="grid gap-[var(--ds-space-5)]">
      <Input label="Hidden label" labelHidden placeholder="Hidden label" helperText="Helper text" />
      <Input label="Corner hint" cornerHint="Max 100" helperText="Helper text" />
      <Input label="Leading icon" iconLeft={<span aria-hidden="true">@</span>} placeholder="email" />
      <Input label="Trailing icon" iconRight={<span aria-hidden="true">?</span>} placeholder="Search" />
      <Input label="Inline add-on" addonLeft="https://" placeholder="example.com" />
      <Input label="Inline add-ons" addonLeft="https://" addonRight=".com" placeholder="example" />
      <Input
        label="Leading icon + trailing button"
        iconLeft={<span aria-hidden="true">@</span>}
        addonRight={<Button size="small">Go</Button>}
        placeholder="username"
      />
      <Input
        label="Keyboard shortcut"
        placeholder="Search"
        suffix={<span className="rounded-[var(--ds-radius-sm)] border border-[var(--ds-border-default)] px-[var(--ds-space-1)]">Cmd K</span>}
      />
      <Input label="Inset label" labelPosition="inset" placeholder="Placeholder" />
      <Input label="Overlap label" labelPosition="overlap" placeholder="Placeholder" />
      <Input label="Pill shape" shape="pill" placeholder="Placeholder" />
      <Input label="Underline variant" variant="underline" placeholder="Placeholder" />
      <div className="flex w-full">
        <Input
          label="Group start"
          labelHidden
          placeholder="First"
          groupPosition="start"
          fullWidth
        />
        <Input
          label="Group middle"
          labelHidden
          placeholder="Middle"
          groupPosition="middle"
          fullWidth
        />
        <Input
          label="Group end"
          labelHidden
          placeholder="Last"
          groupPosition="end"
          fullWidth
        />
      </div>
    </div>
  )
};
