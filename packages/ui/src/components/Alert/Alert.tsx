import * as React from "react";
import { cx } from "../shared/cx";

export type AlertTone = "success" | "info" | "warning" | "danger";

export type AlertProps = React.HTMLAttributes<HTMLDivElement> & {
  tone?: AlertTone;
  title?: string;
  description?: string;
  action?: React.ReactNode;
  icon?: React.ReactNode;
  onClose?: () => void;
};

const toneStyles: Record<AlertTone, string> = {
  success:
    "bg-[var(--ds-bg-system-success)] border-[var(--ds-border-system-success)] text-[var(--ds-text-system-success)]",
  info: "bg-[var(--ds-bg-system-info)] border-[var(--ds-border-system-info)] text-[var(--ds-text-system-info)]",
  warning:
    "bg-[var(--ds-bg-system-warning)] border-[var(--ds-border-system-warning)] text-[var(--ds-text-system-warning)]",
  danger:
    "bg-[var(--ds-bg-system-danger)] border-[var(--ds-border-system-danger)] text-[var(--ds-text-system-danger)]"
};

export function Alert({
  tone = "info",
  title,
  description,
  action,
  icon,
  onClose,
  className,
  ...props
}: AlertProps) {
  const role = tone === "danger" || tone === "warning" ? "alert" : "status";

  return (
    <div
      role={role}
      className={cx(
        "relative flex items-start gap-[var(--ds-space-2)] rounded-[var(--ds-radius-default)] border border-solid",
        "p-[var(--ds-space-3)] shadow-[var(--ds-shadow-neutral-sm)]",
        toneStyles[tone],
        className
      )}
      {...props}
    >
      {icon && <div className="mt-[2px] shrink-0">{icon}</div>}
      <div className="flex min-w-0 flex-1 flex-col gap-[var(--ds-space-1)]">
        {title && (
          <p className="text-[var(--ds-text-base)] font-bold leading-[var(--ds-text-2xl)]">
            {title}
          </p>
        )}
        {description && (
          <p className="text-[var(--ds-text-base)] leading-[var(--ds-text-2xl)]">
            {description}
          </p>
        )}
        {action && <div className="mt-[var(--ds-space-1)]">{action}</div>}
      </div>
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          aria-label="Close alert"
          className="absolute right-[7px] top-[7px] inline-flex size-[24px] items-center justify-center rounded-[var(--ds-radius-full)]"
        >
          <span className="text-[var(--ds-text-xl)] leading-[var(--ds-text-xl)]">
            ×
          </span>
        </button>
      )}
    </div>
  );
}
