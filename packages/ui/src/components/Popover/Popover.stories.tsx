import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Popover, PopoverContent, PopoverTrigger } from "./Popover";
import { Button } from "../Button/Button";

const meta: Meta<typeof Popover> = {
  title: "Components/Popover",
  component: Popover,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: [
          "Popover for non-blocking contextual content.",
          "",
          "**When to use**: quick info or secondary actions.",
          "**When to avoid**: critical flows (use Modal).",
          "",
          "**Accessibility**: `aria-expanded` on trigger.",
          "",
          "**Tokens utilisés**:",
          "- `--ds-bg-layer100`, `--ds-border-default`, `--ds-shadow-neutral-md`",
          "",
          "**TODO / Missing specs**:",
          "- Placement options not specified."
        ].join("\n")
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Playground: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger>
          <Button variant="outlined">Toggle Popover</Button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="grid gap-[var(--ds-space-2)]">
            <p className="text-[var(--ds-text-base)]">Popover content</p>
            <Button size="small" onClick={() => setOpen(false)}>
              Close
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    );
  }
};

export const NearViewportEdges: Story = {
  render: () => (
    <div className="relative h-[80vh] w-full">
      <div className="absolute left-[var(--ds-space-2)] top-[var(--ds-space-2)]">
        <Popover defaultOpen>
          <PopoverTrigger>
            <Button size="small">Top left</Button>
          </PopoverTrigger>
          <PopoverContent>
            <p className="text-[var(--ds-text-base)]">Popover content</p>
          </PopoverContent>
        </Popover>
      </div>
      <div className="absolute right-[var(--ds-space-2)] top-[var(--ds-space-2)]">
        <Popover defaultOpen>
          <PopoverTrigger>
            <Button size="small">Top right</Button>
          </PopoverTrigger>
          <PopoverContent>
            <p className="text-[var(--ds-text-base)]">Popover content</p>
          </PopoverContent>
        </Popover>
      </div>
      <div className="absolute bottom-[var(--ds-space-2)] left-1/2 -translate-x-1/2">
        <Popover defaultOpen>
          <PopoverTrigger>
            <Button size="small">Bottom center</Button>
          </PopoverTrigger>
          <PopoverContent>
            <p className="text-[var(--ds-text-base)]">Popover content</p>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
};
