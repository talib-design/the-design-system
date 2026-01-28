import type { Meta, StoryObj } from "@storybook/react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./Accordion";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  args: {
    type: "single"
  },
  argTypes: {
    type: { control: "radio", options: ["single", "multiple"] },
    onValueChange: { action: "valueChange" }
  },
  parameters: {
    docs: {
      description: {
        component: [
          "Collapsible content panels.",
          "",
          "**When to use**: progressive disclosure of related content.",
          "**When to avoid**: navigation or unrelated sections.",
          "",
          "**Accessibility**: triggers use `aria-expanded` and `aria-controls`.",
          "",
          "**Tokens utilisés**:",
          "- `--ds-bg-layer100`, `--ds-bg-layer200`",
          "- `--ds-border-default`, `--ds-text-primary`, `--ds-text-secondary`",
          "- `--ds-focus-ring-*`"
        ].join("\n")
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Playground: Story = {
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger value="item-1">Accordion item 1</AccordionTrigger>
        <AccordionContent value="item-1">
          Content for item 1.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger value="item-2">Accordion item 2</AccordionTrigger>
        <AccordionContent value="item-2">
          Content for item 2.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
};

export const States: Story = {
  render: () => (
    <div className="grid gap-[var(--ds-space-4)]">
      <Accordion type="single" defaultValue={["item-1"]}>
        <AccordionItem value="item-1">
          <AccordionTrigger value="item-1">Single: open</AccordionTrigger>
          <AccordionContent value="item-1">Opened content.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger value="item-2">Single: closed</AccordionTrigger>
          <AccordionContent value="item-2">Closed content.</AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="multiple" defaultValue={["item-1", "item-2"]}>
        <AccordionItem value="item-1">
          <AccordionTrigger value="item-1">Multiple: open 1</AccordionTrigger>
          <AccordionContent value="item-1">Opened content 1.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger value="item-2">Multiple: open 2</AccordionTrigger>
          <AccordionContent value="item-2">Opened content 2.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
};
