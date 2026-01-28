import * as React from "react";
import { cx } from "../shared/cx";

type TooltipContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
  id: string;
};

const TooltipContext = React.createContext<TooltipContextValue | null>(null);

export type TooltipProps = {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
};

export function Tooltip({ defaultOpen, open, onOpenChange, children }: TooltipProps) {
  const [internal, setInternal] = React.useState(Boolean(defaultOpen));
  const isOpen = open ?? internal;
  const id = React.useId();

  const setOpen = (next: boolean) => {
    onOpenChange?.(next);
    if (open === undefined) setInternal(next);
  };

  return (
    <TooltipContext.Provider value={{ open: isOpen, setOpen, id }}>
      <span className="relative inline-flex">{children}</span>
    </TooltipContext.Provider>
  );
}

export function TooltipTrigger({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  const ctx = React.useContext(TooltipContext);
  if (!ctx) throw new Error("TooltipTrigger must be used within Tooltip");
  return (
    <span
      aria-describedby={ctx.id}
      onMouseEnter={() => ctx.setOpen(true)}
      onMouseLeave={() => ctx.setOpen(false)}
      onFocus={() => ctx.setOpen(true)}
      onBlur={() => ctx.setOpen(false)}
      className={className}
      {...props}
    />
  );
}

export function TooltipContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const ctx = React.useContext(TooltipContext);
  if (!ctx || !ctx.open) return null;
  return (
    <div
      id={ctx.id}
      role="tooltip"
      className={cx(
        "absolute bottom-full left-1/2 -translate-x-1/2 mb-[var(--ds-space-1)]",
        "rounded-[var(--ds-radius-default)] bg-[var(--ds-bg-tooltip-default)] px-[var(--ds-space-2)] py-[var(--ds-space-1)]",
        "text-[var(--ds-text-sm)] leading-[var(--ds-text-xl)] text-[var(--ds-text-invert)] shadow-[var(--ds-shadow-neutral-md)]",
        className
      )}
      {...props}
    />
  );
}
