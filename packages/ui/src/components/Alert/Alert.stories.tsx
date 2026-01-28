import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "./Alert";
import { Button } from "../Button/Button";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  tags: ["autodocs"],
  args: {
    tone: "info",
    title: "Info title",
    description: "This is an informational alert.",
    onClose: undefined
  },
  argTypes: {
    tone: {
      control: "select",
      options: ["success", "info", "warning", "danger"]
    },
    onClose: { action: "closed" },
    icon: { control: false },
    action: { control: false }
  },
  parameters: {
    docs: {
      description: {
        component: [
          "Inline feedback message with semantic tones.",
          "",
          "**When to use**: contextual feedback for system or form actions.",
          "**When to avoid**: blocking errors (use Modal).",
          "",
          "**Tones**: `success`, `info`, `warning`, `danger`.",
          "**Accessibility**: `role=alert` for warning/danger, `role=status` otherwise.",
          "",
          "**Tokens utilisés**:",
          "- `--ds-bg-system-*`, `--ds-border-system-*`, `--ds-text-system-*`",
          "- `--ds-shadow-neutral-sm`, `--ds-radius-default`"
        ].join("\n")
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Playground: Story = {};

export const States: Story = {
  render: () => (
    <div className="grid gap-[var(--ds-space-3)]">
      <Alert tone="success" title="Success" description="Operation completed." />
      <Alert tone="info" title="Info" description="Informational message." />
      <Alert tone="warning" title="Warning" description="Check your input." />
      <Alert
        tone="danger"
        title="Error"
        description="Something went wrong."
        action={<Button variant="text">Retry</Button>}
      />
      <Alert
        tone="danger"
        title="Closable"
        description="This alert can be dismissed."
        onClose={() => {}}
      />
    </div>
  )
};
