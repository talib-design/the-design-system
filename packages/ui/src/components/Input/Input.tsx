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
  /** Left icon inside the input field. */
  iconLeft?: React.ReactNode;
  /** Right icon inside the input field. */
  iconRight?: React.ReactNode;
  /** Inline addon before the input (inside the same border). */
  addonLeft?: React.ReactNode;
  /** Inline addon after the input (inside the same border). */
  addonRight?: React.ReactNode;
  /** Trailing content inside the input (e.g. keyboard shortcut). */
  suffix?: React.ReactNode;
  /** Right-aligned hint next to the label. */
  cornerHint?: string;
  /** Hide the visual label but keep it for accessibility. */
  labelHidden?: boolean;
  /** Label placement variant. */
  labelPosition?: "top" | "inset" | "overlap";
  /** Input shape. */
  shape?: "default" | "pill";
  /** Input visual variant. */
  variant?: "default" | "underline";
  /** Grouped input position for shared borders. */
  groupPosition?: "single" | "start" | "middle" | "end";
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

const labelBackground: Record<InputState, string> = {
  default: "bg-[var(--ds-input-default-bg)]",
  hover: "bg-[var(--ds-input-hover-bg)]",
  active: "bg-[var(--ds-input-active-bg)]",
  filled: "bg-[var(--ds-input-filled-bg)]",
  error: "bg-[var(--ds-input-error-bg)]",
  disabled: "bg-[var(--ds-input-disabled-bg)]",
  readonly: "bg-[var(--ds-input-readonly-bg)]"
};

const groupRadius: Record<NonNullable<InputProps["groupPosition"]>, string> = {
  single: "rounded-[var(--ds-input-radius)]",
  start: "rounded-l-[var(--ds-input-radius)] rounded-r-none",
  middle: "rounded-none",
  end: "rounded-r-[var(--ds-input-radius)] rounded-l-none"
};

const groupPositionClasses: Record<NonNullable<InputProps["groupPosition"]>, string> = {
  single: "",
  start: "",
  middle: "-ml-[var(--ds-border-base)]",
  end: "-ml-[var(--ds-border-base)]"
};

const variantClasses: Record<NonNullable<InputProps["variant"]>, string> = {
  default: "",
  underline:
    "rounded-none border-0 border-b border-[var(--ds-input-default-border-color)] bg-[var(--ds-bg-layer200)]"
};

const shapeClasses: Record<NonNullable<InputProps["shape"]>, string> = {
  default: "",
  pill: "rounded-[var(--ds-radius-full)]"
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      label,
      helperText,
      optional,
      state,
      iconLeft,
      iconRight,
      addonLeft,
      addonRight,
      suffix,
      cornerHint,
      labelHidden,
      labelPosition = "top",
      shape = "default",
      variant = "default",
      groupPosition = "single",
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

    const showLabel = Boolean(label);
    const hasInline = Boolean(iconLeft || iconRight || suffix);
    const inputPaddingX = "px-[var(--ds-input-padding-x)]";
    const inputPaddingY = "py-[var(--ds-input-padding-y)]";

    return (
      <div className={cx("flex flex-col gap-[var(--ds-space-1)]", fullWidth && "w-full")}>
        {showLabel && labelPosition === "top" && (
          <div className="flex items-center justify-between">
            <label
              htmlFor={inputId}
              className={cx("text-sm font-semibold", labelColor[resolvedState], labelHidden && "sr-only")}
            >
              {label}
              {optional && (
                <span className="ml-[var(--ds-space-0_5)] text-xs text-[var(--ds-text-placeholder)]">
                  (facultatif)
                </span>
              )}
            </label>
            {cornerHint && (
              <span className="text-xs text-[var(--ds-text-secondary)]">{cornerHint}</span>
            )}
          </div>
        )}

        <div className="relative">
          <div
            className={cx(
              "flex w-full items-stretch border border-solid",
              "focus-within:outline focus-within:outline-[var(--ds-focus-ring-width)] focus-within:outline-[var(--ds-focus-ring-color)] focus-within:outline-offset-2",
              stateClasses[resolvedState],
              groupRadius[groupPosition],
              groupPositionClasses[groupPosition],
              shapeClasses[shape],
              variantClasses[variant],
              fullWidth && "w-full"
            )}
          >
            {addonLeft && (
              <span
                className={cx(
                  "inline-flex items-center border-r border-[var(--ds-border-default)]",
                  inputPaddingX,
                  inputPaddingY,
                  "text-[var(--ds-text-secondary)]"
                )}
              >
                {addonLeft}
              </span>
            )}

            <div className={cx("relative flex min-w-0 flex-1 items-center gap-[var(--ds-space-2)]", inputPaddingX, inputPaddingY)}>
              {showLabel && labelPosition !== "top" && (
                <label
                  htmlFor={inputId}
                  className={cx(
                    "pointer-events-none absolute left-[var(--ds-input-padding-x)] text-xs",
                    labelColor[resolvedState],
                    labelHidden && "sr-only",
                    labelPosition === "inset"
                      ? "top-[var(--ds-space-1)]"
                      : "top-[-6px] px-[var(--ds-space-1)]",
                    labelPosition === "overlap" && labelBackground[resolvedState]
                  )}
                >
                  {label}
                </label>
              )}

              {iconLeft && <span className="text-[var(--ds-text-secondary)]">{iconLeft}</span>}

              <InputBase
                id={inputId}
                ref={ref}
                aria-invalid={error || undefined}
                aria-describedby={helperId}
                disabled={disabled}
                readOnly={readOnly}
                className={cx(
                  "min-w-0 flex-1 bg-transparent outline-none",
                  "border-0",
                  textColor[resolvedState],
                  className,
                  hasInline && "placeholder:text-[var(--ds-text-placeholder)]",
                  labelPosition !== "top" && "pt-[var(--ds-space-4)]"
                )}
                {...props}
              />

              {suffix && (
                <span className="text-xs text-[var(--ds-text-secondary)]">{suffix}</span>
              )}

              {iconRight && <span className="text-[var(--ds-text-secondary)]">{iconRight}</span>}
            </div>

            {addonRight && (
              <span
                className={cx(
                  "inline-flex items-center border-l border-[var(--ds-border-default)]",
                  inputPaddingX,
                  inputPaddingY,
                  "text-[var(--ds-text-secondary)]"
                )}
              >
                {addonRight}
              </span>
            )}
          </div>
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
