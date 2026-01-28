import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardContent, CardFooter, CardHeader } from "./Card";
import { Button } from "../Button/Button";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  args: {
    size: "md"
  },
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] }
  },
  parameters: {
    docs: {
      description: {
        component: [
          "Container for grouping related content.",
          "",
          "**When to use**: summaries, panels, or grouped actions.",
          "**When to avoid**: single short text blocks.",
          "",
          "**Tokens utilisés**:",
          "- `--ds-card-*` for radius, padding, gap, and borders",
          "- `--ds-bg-layer100`, `--ds-border-light`"
        ].join("\n")
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Playground: Story = {
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <h3 className="text-[var(--ds-text-xl)] font-semibold">Card title</h3>
        <p className="text-[var(--ds-text-sm)] text-[var(--ds-text-secondary)]">
          Subtitle or supporting text.
        </p>
      </CardHeader>
      <CardContent>
        <p className="text-[var(--ds-text-base)] text-[var(--ds-text-primary)]">
          Card content goes here.
        </p>
      </CardContent>
      <CardFooter>
        <Button variant="outlined">Cancel</Button>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  )
};

export const Sizes: Story = {
  render: () => (
    <div className="grid gap-[var(--ds-space-4)]">
      <Card size="sm">
        <CardHeader>
          <h3 className="text-[var(--ds-text-base)] font-semibold">Small</h3>
        </CardHeader>
        <CardContent>Compact content.</CardContent>
      </Card>
      <Card size="md">
        <CardHeader>
          <h3 className="text-[var(--ds-text-base)] font-semibold">Medium</h3>
        </CardHeader>
        <CardContent>Default content.</CardContent>
      </Card>
      <Card size="lg">
        <CardHeader>
          <h3 className="text-[var(--ds-text-base)] font-semibold">Large</h3>
        </CardHeader>
        <CardContent>Spacious content.</CardContent>
      </Card>
    </div>
  )
};
