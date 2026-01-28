import * as React from "react";
import { cx } from "../shared/cx";

export type SwitchProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type"
> & {
  label?: string;
};

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ id, label, disabled, className, ...props }, ref) => {
    const inputId = id ?? React.useId();
    return (
      <label
        htmlFor={inputId}
        className={cx(
          "group inline-flex items-center gap-[var(--ds-space-2)]",
          disabled ? "cursor-not-allowed" : "cursor-pointer"
        )}
      >
        <input
          id={inputId}
          ref={ref}
          type="checkbox"
          role="switch"
          disabled={disabled}
          className="peer sr-only"
          {...props}
        />
        <span
          className={cx(
            "relative inline-flex h-[24px] w-[48px] items-center rounded-full border border-[var(--ds-border-strong)] bg-[var(--ds-color-neutral-100)] p-[2px]",
            "transition-colors",
            "peer-checked:bg-[var(--ds-bg-brand-filled-default)] peer-checked:border-[var(--ds-border-brand)]",
            "peer-checked:[&>span]:translate-x-[24px]",
            "peer-focus-visible:outline peer-focus-visible:outline-[var(--ds-focus-ring-width)] peer-focus-visible:outline-[var(--ds-focus-ring-color)] peer-focus-visible:outline-offset-2",
            "peer-enabled:group-hover:border-[var(--ds-border-brand)] peer-enabled:group-hover:bg-[var(--ds-bg-brand-transparent-hover)]",
            "peer-disabled:opacity-[var(--ds-opacity-disabled)] peer-disabled:cursor-not-allowed",
            className
          )}
        >
          <span
            className={cx(
              "inline-flex size-[20px] rounded-full bg-[var(--ds-bg-layer100)] transition-transform duration-200 ease-out"
            )}
          />
        </span>
        {label && (
          <span className="text-[var(--ds-text-base)] leading-[var(--ds-text-2xl)] text-[var(--ds-text-primary)]">
            {label}
          </span>
        )}
      </label>
    );
  }
);

Switch.displayName = "Switch";
