import * as React from "react";
import { createPortal } from "react-dom";
import { cx } from "../shared/cx";

export type ModalSize = "sm" | "md" | "lg";

export type ModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  size?: ModalSize;
  /** Provide a custom title id for aria-labelledby. */
  ariaLabelledby?: string;
  children: React.ReactNode;
};

type ModalContextValue = {
  size: ModalSize;
  titleId: string;
};

const ModalContext = React.createContext<ModalContextValue | null>(null);

const sizeClass: Record<ModalSize, string> = {
  sm: "w-[320px] max-w-full",
  md: "w-[540px] max-w-full",
  lg: "w-[720px] max-w-full"
};

const focusableSelector =
  'a[href],button,textarea,input,select,[tabindex]:not([tabindex="-1"])';

const useFocusTrap = (enabled: boolean, containerRef: React.RefObject<HTMLDivElement>) => {
  React.useEffect(() => {
    if (!enabled || !containerRef.current) return;
    const node = containerRef.current;
    const focusables = Array.from(node.querySelectorAll<HTMLElement>(focusableSelector));
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    first?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;
      if (focusables.length === 0) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    node.addEventListener("keydown", onKeyDown);
    return () => node.removeEventListener("keydown", onKeyDown);
  }, [enabled, containerRef]);
};

export function Modal({ open, onOpenChange, size = "md", ariaLabelledby, children }: ModalProps) {
  const contentRef = React.useRef<HTMLDivElement>(null);
  useFocusTrap(open, contentRef);
  const titleId = ariaLabelledby ?? React.useId();

  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onOpenChange(false);
    };
    if (open) document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onOpenChange]);

  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-[var(--ds-color-neutral-950)] opacity-[var(--ds-opacity-disabled)]"
        onClick={() => onOpenChange(false)}
        aria-hidden="true"
      />
      <div
        ref={contentRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className={cx(
          "relative z-10 flex flex-col gap-[var(--ds-space-4)] rounded-[var(--ds-radius-lg)] border border-[var(--ds-border-default)] bg-[var(--ds-bg-layer100)]",
          "p-[var(--ds-space-6)] shadow-[var(--ds-shadow-neutral-lg)]",
          sizeClass[size]
        )}
      >
        <ModalContext.Provider value={{ size, titleId }}>{children}</ModalContext.Provider>
      </div>
    </div>,
    document.body
  );
}

export function ModalHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cx("flex items-center", className)} {...props} />;
}

export function ModalTitle({
  className,
  id,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  const ctx = React.useContext(ModalContext);
  const resolvedId = id ?? ctx?.titleId;
  return (
    <h2
      className={cx(
        "text-[var(--ds-text-2xl)] font-semibold leading-[var(--ds-text-4xl)]",
        className
      )}
      id={resolvedId}
      {...props}
    />
  );
}

export function ModalBody({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cx("text-[var(--ds-text-base)] leading-[var(--ds-text-2xl)]", className)} {...props} />
  );
}

export function ModalFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const ctx = React.useContext(ModalContext);
  const layoutClass =
    ctx?.size === "sm"
      ? "flex w-full flex-col items-center gap-[var(--ds-space-2)] pt-[var(--ds-space-6)]"
      : "flex w-full items-start justify-between gap-[var(--ds-space-4)] pt-[var(--ds-space-6)]";
  return (
    <div className={cx(layoutClass, className)} {...props} />
  );
}

export function ModalFooterActions({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cx("flex items-center gap-[var(--ds-space-4)]", className)} {...props} />;
}

export function ModalSlot({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cx(
        "flex items-center justify-center rounded-[var(--ds-radius-lg)]",
        "bg-[var(--ds-color-purple-200)] p-[10px] text-center",
        "text-[var(--ds-text-base)] leading-[var(--ds-text-2xl)] text-[var(--ds-text-brand)]",
        "h-[220px] w-full",
        className
      )}
      {...props}
    />
  );
}

export function ModalClose({
  className,
  "aria-label": ariaLabel = "Close modal",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      className={cx(
        "absolute right-[-1px] top-[-1px] inline-flex size-[48px] items-center justify-center rounded-[var(--ds-radius-full)]",
        "bg-[var(--ds-bg-brand-transparent-default)] text-[var(--ds-text-brand)]",
        "text-[var(--ds-text-3xl)] leading-[var(--ds-text-3xl)]",
        className
      )}
      {...props}
    >
      ×
    </button>
  );
}
