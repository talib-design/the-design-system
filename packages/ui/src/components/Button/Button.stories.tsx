import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Button",
    variant: "filled",
    size: "default",
    loading: false,
    disabled: false
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["filled", "outlined", "text"]
    },
    size: {
      control: "select",
      options: ["default", "small"]
    },
    loading: { control: "boolean" },
    disabled: { control: "boolean" },
    iconLeft: { control: false },
    iconRight: { control: false },
    onClick: { action: "clicked" }
  },
  parameters: {
    docs: {
      description: {
        component: [
          "Primary action button with tokens-first styling.",
          "",
          "**When to use**: primary or secondary actions in forms and dialogs.",
          "**When to avoid**: navigation links or icon-only actions without labels.",
          "",
          "**Variants / sizes / states**:",
          "- `filled`, `outlined`, `text`",
          "- sizes: `default`, `small`",
          "- states: `loading`, `disabled`, `hover`, `active` (via CSS)",
          "- filled hover uses gradient background",
          "- `disabled` ignores hover/active styles",
          "",
          "**Accessibility**:",
          "- Focus ring uses `--ds-focus-ring-*` tokens.",
          "- `aria-busy` is set when `loading`.",
          "",
          "**Tokens utilisés**:",
          "- `--ds-button-size-default-*`, `--ds-button-size-small-*`",
          "- `--ds-button-color-*`, `--ds-button-outline-*`, `--ds-button-text-*`",
          "- `--ds-focus-ring-color`, `--ds-focus-ring-width`"
        ].join("\n")
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Playground: Story = {};

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-[var(--ds-space-4)]">
      <div className="flex flex-wrap gap-[var(--ds-space-3)]">
        <Button variant="filled">Filled</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="text">Text</Button>
      </div>
      <div className="flex flex-wrap gap-[var(--ds-space-3)]">
        <Button
          variant="filled"
          className="[background:var(--c-button-filled-hover-background)] shadow-[var(--ds-button-color-hover-shadow)]"
          iconLeft={<span aria-hidden="true">🏠</span>}
        >
          Hover (gradient)
        </Button>
      </div>
      <div className="flex flex-wrap gap-[var(--ds-space-3)]">
        <Button size="default">Default</Button>
        <Button size="small">Small</Button>
      </div>
      <div className="flex flex-wrap gap-[var(--ds-space-3)]">
        <Button loading>Loading</Button>
        <Button disabled>Disabled</Button>
        <Button iconLeft={<span aria-hidden="true">⬅</span>}>Icon Left</Button>
        <Button iconRight={<span aria-hidden="true">➡</span>}>Icon Right</Button>
      </div>
      <div className="flex flex-wrap gap-[var(--ds-space-3)]">
        <Button disabled>Disabled (no hover)</Button>
      </div>
      <div className="flex flex-wrap gap-[var(--ds-space-3)]">
        <Button autoFocus>Focus Visible</Button>
      </div>
    </div>
  )
};
