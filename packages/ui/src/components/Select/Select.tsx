import * as React from "react";
import { cx } from "../shared/cx";

export type SelectState =
  | "default"
  | "hover"
  | "active"
  | "filled"
  | "error"
  | "disabled"
  | "readonly";

export type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  helperText?: string;
  optional?: boolean;
  state?: SelectState;
  fullWidth?: boolean;
  iconRight?: React.ReactNode;
  error?: boolean;
  filled?: boolean;
  readOnly?: boolean;
  placeholder?: string;
};

const stateClasses: Record<SelectState, string> = {
  default:
    "bg-[var(--ds-input-default-bg)] border-[var(--ds-input-default-border-width)] border-[var(--ds-input-default-border-color)]",
  hover:
    "bg-[var(--ds-input-hover-bg)] border-[var(--ds-input-hover-border-width)] border-[var(--ds-input-hover-border-color)]",
  active:
    "bg-[var(--ds-input-active-bg)] border-[var(--ds-input-active-border-width)] border-[var(--ds-input-active-border-color)]",
  filled:
    "bg-[var(--ds-input-filled-bg)] border-[var(--ds-input-filled-border-width)] border-[var(--ds-input-filled-border-color)]",
  error:
    "bg-[var(--ds-input-error-bg)] border-[var(--ds-input-error-border-width)] border-[var(--ds-input-error-border-color)]",
  disabled:
    "bg-[var(--ds-input-disabled-bg)] border-[var(--ds-input-disabled-border-width)] border-[var(--ds-input-disabled-border-color)] opacity-[var(--ds-input-disabled-opacity)]",
  readonly:
    "bg-[var(--ds-input-readonly-bg)] border-[var(--ds-input-readonly-border-width)] border-[var(--ds-input-readonly-border-color)]"
};

const labelColor: Record<SelectState, string> = {
  default: "text-[var(--ds-input-default-label)]",
  hover: "text-[var(--ds-input-hover-label)]",
  active: "text-[var(--ds-input-active-label)]",
  filled: "text-[var(--ds-input-filled-label)]",
  error: "text-[var(--ds-input-error-label)]",
  disabled: "text-[var(--ds-input-disabled-label)]",
  readonly: "text-[var(--ds-input-readonly-label)]"
};

const helperColor: Record<SelectState, string> = {
  default: "text-[var(--ds-input-default-helper)]",
  hover: "text-[var(--ds-input-hover-helper)]",
  active: "text-[var(--ds-input-active-helper)]",
  filled: "text-[var(--ds-input-filled-helper)]",
  error: "text-[var(--ds-input-error-helper)]",
  disabled: "text-[var(--ds-input-disabled-helper)]",
  readonly: "text-[var(--ds-input-readonly-helper)]"
};

const textColor: Record<SelectState, string> = {
  default: "text-[var(--ds-input-default-text)]",
  hover: "text-[var(--ds-input-hover-text)]",
  active: "text-[var(--ds-input-active-text)]",
  filled: "text-[var(--ds-input-filled-text)]",
  error: "text-[var(--ds-input-error-text)]",
  disabled: "text-[var(--ds-input-disabled-text)]",
  readonly: "text-[var(--ds-input-readonly-text)]"
};

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      id,
      label,
      helperText,
      optional,
      state,
      iconRight,
      error,
      filled,
      disabled,
      readOnly,
      fullWidth,
      className,
      placeholder,
      children,
      defaultValue,
      value,
      onMouseDown,
      onKeyDown,
      ...props
    },
    ref
  ) => {
    const selectId = id ?? React.useId();
    const helperId = helperText ? `${selectId}-help` : undefined;
    const resolvedState: SelectState = disabled
      ? "disabled"
      : readOnly
        ? "readonly"
        : error
          ? "error"
          : filled
            ? "filled"
            : state ?? "default";

    const isControlled = value !== undefined;
    const selectDefaultValue =
      placeholder && !isControlled && defaultValue === undefined ? "" : defaultValue;

    return (
      <div className={cx("flex flex-col gap-[var(--ds-space-1)]", fullWidth && "w-full")}>
        {label && (
          <label
            htmlFor={selectId}
            className={cx("text-sm font-semibold", labelColor[resolvedState])}
          >
            {label}
            {optional && (
              <span className="ml-[var(--ds-space-0_5)] text-xs text-[var(--ds-text-placeholder)]">
                (facultatif)
              </span>
            )}
          </label>
        )}
        <div className="relative">
          <select
            id={selectId}
            ref={ref}
            aria-invalid={error || undefined}
            aria-describedby={helperId}
            aria-readonly={readOnly || undefined}
            disabled={disabled}
            value={value}
            defaultValue={selectDefaultValue}
            onMouseDown={(event) => {
              if (readOnly) event.preventDefault();
              onMouseDown?.(event);
            }}
            onKeyDown={(event) => {
              if (readOnly) event.preventDefault();
              onKeyDown?.(event);
            }}
            className={cx(
              "w-full appearance-none rounded-[var(--ds-input-radius)] border border-solid px-[var(--ds-input-padding-x)] py-[var(--ds-input-padding-y)]",
              "pr-[var(--ds-space-6)]",
              "focus-visible:outline focus-visible:outline-[var(--ds-focus-ring-width)] focus-visible:outline-[var(--ds-focus-ring-color)] focus-visible:outline-offset-2",
              stateClasses[resolvedState],
              textColor[resolvedState],
              className
            )}
            {...props}
          >
            {placeholder && (
              <option value="" disabled hidden>
                {placeholder}
              </option>
            )}
            {children}
          </select>
          <span className="pointer-events-none absolute right-[var(--ds-space-2)] top-1/2 -translate-y-1/2 text-[var(--ds-icon-brand)]">
            {iconRight ?? <span aria-hidden="true">▾</span>}
          </span>
        </div>
        {helperText && (
          <p id={helperId} className={cx("text-xs", helperColor[resolvedState])}>
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";
