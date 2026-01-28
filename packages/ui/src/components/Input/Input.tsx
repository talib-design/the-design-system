import * as React from "react";
import { cx } from "../shared/cx";

export type InputState =
  | "default"
  | "hover"
  | "active"
  | "filled"
  | "error"
  | "disabled"
  | "readonly";

export type InputBaseProps = React.InputHTMLAttributes<HTMLInputElement> & {
  fullWidth?: boolean;
};

export const InputBase = React.forwardRef<HTMLInputElement, InputBaseProps>(
  ({ className, fullWidth, ...props }, ref) => (
    <input
      ref={ref}
      className={cx(fullWidth && "w-full", className)}
      {...props}
    />
  )
);

InputBase.displayName = "InputBase";

export type InputProps = InputBaseProps & {
  label?: string;
  helperText?: string;
  optional?: boolean;
  state?: InputState;
  fullWidth?: boolean;
  iconRight?: React.ReactNode;
  error?: boolean;
  filled?: boolean;
};

const stateClasses: Record<InputState, string> = {
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

const labelColor: Record<InputState, string> = {
  default: "text-[var(--ds-input-default-label)]",
  hover: "text-[var(--ds-input-hover-label)]",
  active: "text-[var(--ds-input-active-label)]",
  filled: "text-[var(--ds-input-filled-label)]",
  error: "text-[var(--ds-input-error-label)]",
  disabled: "text-[var(--ds-input-disabled-label)]",
  readonly: "text-[var(--ds-input-readonly-label)]"
};

const helperColor: Record<InputState, string> = {
  default: "text-[var(--ds-input-default-helper)]",
  hover: "text-[var(--ds-input-hover-helper)]",
  active: "text-[var(--ds-input-active-helper)]",
  filled: "text-[var(--ds-input-filled-helper)]",
  error: "text-[var(--ds-input-error-helper)]",
  disabled: "text-[var(--ds-input-disabled-helper)]",
  readonly: "text-[var(--ds-input-readonly-helper)]"
};

const textColor: Record<InputState, string> = {
  default: "text-[var(--ds-input-default-text)] placeholder:text-[var(--ds-input-default-text)]",
  hover: "text-[var(--ds-input-hover-text)] placeholder:text-[var(--ds-input-hover-text)]",
  active: "text-[var(--ds-input-active-text)] placeholder:text-[var(--ds-input-active-text)]",
  filled: "text-[var(--ds-input-filled-text)] placeholder:text-[var(--ds-input-filled-text)]",
  error: "text-[var(--ds-input-error-text)] placeholder:text-[var(--ds-input-error-text)]",
  disabled:
    "text-[var(--ds-input-disabled-text)] placeholder:text-[var(--ds-input-disabled-text)]",
  readonly:
    "text-[var(--ds-input-readonly-text)] placeholder:text-[var(--ds-input-readonly-text)]"
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
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
      ...props
    },
    ref
  ) => {
    const inputId = id ?? React.useId();
    const helperId = helperText ? `${inputId}-help` : undefined;
    const resolvedState: InputState = disabled
      ? "disabled"
      : readOnly
        ? "readonly"
        : error
          ? "error"
          : filled
            ? "filled"
            : state ?? "default";

    return (
      <div className={cx("flex flex-col gap-[var(--ds-space-1)]", fullWidth && "w-full")}>
        {label && (
          <label
            htmlFor={inputId}
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
          <InputBase
            id={inputId}
            ref={ref}
            aria-invalid={error || undefined}
            aria-describedby={helperId}
            disabled={disabled}
            readOnly={readOnly}
            className={cx(
              "w-full rounded-[var(--ds-input-radius)] border border-solid px-[var(--ds-input-padding-x)] py-[var(--ds-input-padding-y)]",
              "focus-visible:outline focus-visible:outline-[var(--ds-focus-ring-width)] focus-visible:outline-[var(--ds-focus-ring-color)] focus-visible:outline-offset-2",
              stateClasses[resolvedState],
              textColor[resolvedState],
              className
            )}
            {...props}
          />
          {iconRight && (
            <span className="pointer-events-none absolute right-[var(--ds-space-2)] top-1/2 -translate-y-1/2">
              {iconRight}
            </span>
          )}
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

Input.displayName = "Input";
