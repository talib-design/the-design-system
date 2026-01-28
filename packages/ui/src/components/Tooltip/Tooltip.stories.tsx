import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./Tooltip";
import { Button } from "../Button/Button";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: [
          "Short helper text shown on hover/focus.",
          "",
          "**When to use**: clarify icons or short labels.",
          "**When to avoid**: long content (use Popover).",
          "",
          "**Accessibility**: `role=\"tooltip\"`, `aria-describedby`.",
          "",
          "**Tokens utilisés**:",
          "- `--ds-bg-tooltip-default`, `--ds-text-invert`",
          "- `--ds-shadow-neutral-md`",
          "",
          "**TODO / Missing specs**:",
          "- Delay and placement options not specified."
        ].join("\n")
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Playground: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger>
        <Button variant="outlined">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>Tooltip content</TooltipContent>
    </Tooltip>
  )
};
