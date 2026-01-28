import type { Meta, StoryObj } from "@storybook/react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator
} from "./Breadcrumb";

const meta: Meta<typeof Breadcrumb> = {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
  tags: ["autodocs"],
  args: {
    separator: "/"
  },
  parameters: {
    docs: {
      description: {
        component: [
          "Breadcrumb navigation for hierarchical pages.",
          "",
          "**When to use**: pages with a clear hierarchy.",
          "**When to avoid**: flat navigation or single-level flows.",
          "",
          "**Accessibility**: `aria-label=\"Breadcrumb\"`, `aria-current=\"page\"`.",
          "",
          "**Tokens utilisés**:",
          "- `--ds-text-primary`, `--ds-text-secondary`, `--ds-text-brand`",
          "",
          "**TODO / Missing specs**:",
          "- Overflow behavior not specified."
        ].join("\n")
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Playground: Story = {
  render: (args) => (
    <Breadcrumb {...args}>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Home</BreadcrumbLink>
        <BreadcrumbSeparator />
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Library</BreadcrumbLink>
        <BreadcrumbSeparator />
      </BreadcrumbItem>
      <BreadcrumbItem current>
        <BreadcrumbLink current href="#">
          Current Page
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  )
};
