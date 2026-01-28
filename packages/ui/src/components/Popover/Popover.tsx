import * as React from "react";
import { cx } from "../shared/cx";

type PopoverContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const PopoverContext = React.createContext<PopoverContextValue | null>(null);

export type PopoverProps = {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
};

export function Popover({
  open,
  defaultOpen,
  onOpenChange,
  children
}: PopoverProps) {
  const [internal, setInternal] = React.useState(Boolean(defaultOpen));
  const isOpen = open ?? internal;
  const setOpen = (next: boolean) => {
    onOpenChange?.(next);
    if (open === undefined) setInternal(next);
  };

  return (
    <PopoverContext.Provider value={{ open: isOpen, setOpen }}>
      <div className="relative inline-flex">{children}</div>
    </PopoverContext.Provider>
  );
}

export function PopoverTrigger({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const ctx = React.useContext(PopoverContext);
  if (!ctx) throw new Error("PopoverTrigger must be used within Popover");
  return (
    <button
      type="button"
      aria-expanded={ctx.open}
      onClick={() => ctx.setOpen(!ctx.open)}
      className={className}
      {...props}
    />
  );
}

export function PopoverContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const ctx = React.useContext(PopoverContext);
  if (!ctx) throw new Error("PopoverContent must be used within Popover");
  if (!ctx.open) return null;
  return (
    <div
      role="dialog"
      className={cx(
        "absolute z-10 mt-[var(--ds-space-2)] min-w-[240px] w-[320px]",
        "rounded-[var(--ds-radius-lg)] border border-[var(--ds-border-default)] bg-[var(--ds-bg-layer100)]",
        "p-[var(--ds-space-4)] shadow-[var(--ds-shadow-neutral-md)]",
        className
      )}
      {...props}
    />
  );
}
