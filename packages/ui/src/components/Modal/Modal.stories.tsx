import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  Modal,
  ModalBody,
  ModalClose,
  ModalFooter,
  ModalFooterActions,
  ModalHeader,
  ModalSlot,
  ModalTitle
} from "./Modal";
import { Button } from "../Button/Button";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
  args: {
    size: "md"
  },
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    open: { control: false },
    onOpenChange: { action: "openChange" }
  },
  parameters: {
    docs: {
      description: {
        component: [
          "Modal dialog with focus trap and escape key handling.",
          "",
          "**When to use**: blocking confirmation or critical tasks.",
          "**When to avoid**: simple notifications (use Alert).",
          "",
          "**Accessibility**: `role=\"dialog\"`, `aria-modal`, focus trap.",
          "",
          "**Tokens utilisés**:",
          "- `--ds-bg-layer100`, `--ds-border-default`, `--ds-shadow-neutral-lg`",
          "- `--ds-text-*`, `--ds-radius-lg`"
        ].join("\n")
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Playground: Story = {
  render: (args) => {
    const [open, setOpen] = React.useState(true);
    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal {...args} open={open} onOpenChange={setOpen}>
          <ModalClose aria-label="Close" onClick={() => setOpen(false)} />
          <ModalHeader>
            <ModalTitle>Modal title</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <p>
              Main text. Phasellus faucibus, felis quis condimentum interdum, urna tortor
              gravida augue, ut hendrerit lorem risus imperdiet sem. Curabitur bibendum est
              nec commodo ornare. Donec elementum varius nisi.
            </p>
          </ModalBody>
          <ModalSlot>{"< Slot component >"}</ModalSlot>
          <ModalFooter>
            {args.size === "sm" ? (
              <>
                <Button size="small" fullWidth>
                  Button
                </Button>
                <Button
                  size="small"
                  fullWidth
                  variant="outlined"
                >
                  Button
                </Button>
                <Button size="small" fullWidth variant="text" onClick={() => setOpen(false)}>
                  Annuler
                </Button>
              </>
            ) : (
              <>
                <Button size="small" variant="text" onClick={() => setOpen(false)}>
                  Annuler
                </Button>
                <ModalFooterActions>
                  <Button size="small" variant="outlined">
                    Button
                  </Button>
                  <Button size="small">
                    Button
                  </Button>
                </ModalFooterActions>
              </>
            )}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
};
