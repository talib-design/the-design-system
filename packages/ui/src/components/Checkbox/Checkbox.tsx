import * as React from "react";
import { cx } from "../shared/cx";

export type CheckboxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type"
> & {
  label?: string;
  description?: string;
  /** Place the checkbox control on the right. */
  checkboxPosition?: "left" | "right";
  fullWidth?: boolean;
  indeterminate?: boolean;
  error?: boolean;
  icon?: React.ReactNode;
  indeterminateIcon?: React.ReactNode;
};

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      id,
      label,
      description,
      checkboxPosition = "left",
      fullWidth,
      indeterminate,
      disabled,
      error,
      icon,
      indeterminateIcon,
      className,
      ...props
    },
    ref
  ) => {
    const internalRef = React.useRef<HTMLInputElement | null>(null);
    const inputId = id ?? React.useId();

    React.useEffect(() => {
      if (internalRef.current) {
        internalRef.current.indeterminate = Boolean(indeterminate);
      }
    }, [indeterminate]);

    const control = (
      <span
        className={cx(
          "relative inline-flex size-[20px] items-center justify-center rounded-[var(--ds-radius-default)] border border-solid",
          "group-hover:border-[var(--ds-border-brand)] group-hover:bg-[var(--ds-bg-brand-transparent-hover)]",
          "peer-focus-visible:outline peer-focus-visible:outline-[var(--ds-focus-ring-width)] peer-focus-visible:outline-[var(--ds-focus-ring-color)] peer-focus-visible:outline-offset-2",
          "peer-checked:border-[var(--ds-border-brand)] peer-checked:bg-[var(--ds-bg-brand-filled-default)]",
          "peer-disabled:opacity-[var(--ds-opacity-disabled)] peer-disabled:cursor-not-allowed",
          "peer-disabled:border-[var(--ds-border-strong)] peer-disabled:bg-transparent",
          checkboxPosition === "right" && "order-2",
          error
            ? "border-[var(--ds-border-system-danger)]"
            : "border-[var(--ds-border-strong)]",
          className
        )}
      >
        <span
          className={cx(
            "absolute inset-[2px] rounded-[var(--ds-radius-default)]",
            "bg-[var(--ds-bg-brand-filled-default)]",
            "opacity-0",
            "peer-checked:opacity-100",
            "group-data-[indeterminate=true]:opacity-100",
            error && "bg-[var(--ds-bg-system-danger)]"
          )}
        />
        <span
          aria-hidden="true"
          className={cx(
            "relative z-[1] text-[var(--ds-text-invert)]",
            "text-[var(--ds-text-sm)] leading-[var(--ds-text-sm)]",
            "opacity-0",
            "peer-checked:opacity-100",
            "group-data-[indeterminate=true]:opacity-0"
          )}
        >
          {icon ?? "✓"}
        </span>
        <span
          aria-hidden="true"
          className={cx(
            "relative z-[1] text-[var(--ds-text-invert)]",
            "text-[var(--ds-text-sm)] leading-[var(--ds-text-sm)]",
            "opacity-0",
            "group-data-[indeterminate=true]:opacity-100",
            "peer-checked:opacity-0"
          )}
        >
          {indeterminateIcon ?? "—"}
        </span>
      </span>
    );

    const labelBlock = label ? (
      <span className="flex flex-col gap-[var(--ds-space-0_5)]">
        <span className="text-[var(--ds-text-base)] leading-[var(--ds-text-2xl)] text-[var(--ds-text-primary)]">
          {label}
        </span>
        {description && (
          <span className="text-[var(--ds-text-sm)] leading-[var(--ds-text-xl)] text-[var(--ds-text-secondary)]">
            {description}
          </span>
        )}
      </span>
    ) : null;

    return (
      <label
        htmlFor={inputId}
        data-indeterminate={indeterminate ? "true" : "false"}
        className={cx(
          "group inline-flex items-start gap-[var(--ds-space-2)]",
          checkboxPosition === "right" && "justify-between",
          fullWidth && "w-full",
          disabled ? "cursor-not-allowed" : "cursor-pointer"
        )}
      >
        <input
          id={inputId}
          ref={(node) => {
            internalRef.current = node;
            if (typeof ref === "function") ref(node);
            if (ref && typeof ref === "object") ref.current = node;
          }}
          type="checkbox"
          disabled={disabled}
          aria-invalid={error || undefined}
          className="peer sr-only"
          {...props}
        />
        {control}
        {labelBlock && (
          <span className={cx("inline-flex", checkboxPosition === "right" && "order-1")}>
            {labelBlock}
          </span>
        )}
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";
