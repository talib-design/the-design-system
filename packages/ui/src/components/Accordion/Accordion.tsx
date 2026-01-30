import * as React from "react";
import { cx } from "../shared/cx";

type AccordionContextValue = {
  openItems: Set<string>;
  toggleItem: (value: string) => void;
  baseId: string;
};

const AccordionContext = React.createContext<AccordionContextValue | null>(null);

export type AccordionProps = {
  type?: "single" | "multiple";
  defaultValue?: string[];
  value?: string[];
  onValueChange?: (value: string[]) => void;
  className?: string;
  children: React.ReactNode;
};

export function Accordion({
  type = "single",
  defaultValue,
  value,
  onValueChange,
  className,
  children
}: AccordionProps) {
  const baseId = React.useId();
  const [internal, setInternal] = React.useState<Set<string>>(
    () => new Set(defaultValue ?? [])
  );
  const openItems = value ? new Set(value) : internal;

  const toggleItem = (item: string) => {
    const next = new Set(openItems);
    if (next.has(item)) {
      next.delete(item);
    } else {
      if (type === "single") {
        next.clear();
      }
      next.add(item);
    }
    onValueChange?.(Array.from(next));
    if (!value) {
      setInternal(next);
    }
  };

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem, baseId }}>
      <div className={cx("flex flex-col", className)}>{children}</div>
    </AccordionContext.Provider>
  );
}

export type AccordionItemProps = {
  value: string;
  className?: string;
  children: React.ReactNode;
};

export function AccordionItem({ value, className, children }: AccordionItemProps) {
  return (
    <div className={cx("bg-[var(--ds-bg-layer100)]", className)} data-value={value}>
      {children}
    </div>
  );
}

export type AccordionTriggerProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  value: string;
  icon?: React.ReactNode;
};

export function AccordionTrigger({
  value,
  icon,
  className,
  children,
  id: _id,
  ...props
}: AccordionTriggerProps) {
  const ctx = React.useContext(AccordionContext);
  if (!ctx) {
    throw new Error("AccordionTrigger must be used within Accordion");
  }
  const isOpen = ctx.openItems.has(value);
  const baseId = `${ctx.baseId}-${value}`;
  const contentId = `${baseId}-content`;
  const triggerId = `${baseId}-trigger`;

  return (
    <button
      id={triggerId}
      type="button"
      aria-expanded={isOpen}
      aria-controls={contentId}
      onClick={() => ctx.toggleItem(value)}
      className={cx(
        "flex w-full items-center justify-between border-b border-[var(--ds-border-default)]",
        "p-[var(--ds-space-4)] text-left",
        "focus-visible:outline focus-visible:outline-[var(--ds-focus-ring-width)] focus-visible:outline-[var(--ds-focus-ring-color)] focus-visible:outline-offset-2",
        isOpen && "text-[var(--ds-text-primary)]",
        !isOpen && "text-[var(--ds-text-secondary)]",
        className
      )}
      {...props}
    >
      <span className="flex items-center gap-[var(--ds-space-2)]">
        {icon}
        <span className="text-[var(--ds-text-base)] font-bold leading-[var(--ds-text-2xl)]">
          {children}
        </span>
      </span>
      <span className="text-[var(--ds-text-2xl)] leading-[var(--ds-text-2xl)]">
        {isOpen ? "▴" : "▾"}
      </span>
    </button>
  );
}

export type AccordionContentProps = React.HTMLAttributes<HTMLDivElement> & {
  value: string;
};

export function AccordionContent({
  value,
  className,
  children,
  id: _id,
  ...props
}: AccordionContentProps) {
  const ctx = React.useContext(AccordionContext);
  if (!ctx) {
    throw new Error("AccordionContent must be used within Accordion");
  }
  const isOpen = ctx.openItems.has(value);
  const baseId = `${ctx.baseId}-${value}`;
  const contentId = `${baseId}-content`;
  const triggerId = `${baseId}-trigger`;

  if (!isOpen) {
    return null;
  }

  return (
    <div
      id={contentId}
      role="region"
      aria-labelledby={triggerId}
      className={cx(
        "bg-[var(--ds-bg-layer200)] p-[var(--ds-space-4)] text-[var(--ds-text-secondary)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
