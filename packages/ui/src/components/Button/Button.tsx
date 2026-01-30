import * as React from "react";
import { cx } from "../shared/cx";

export type ButtonVariant = "filled" | "outlined" | "text";
export type ButtonSize = "default" | "small";

export type ButtonBaseProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  fullWidth?: boolean;
};

export const ButtonBase = React.forwardRef<HTMLButtonElement, ButtonBaseProps>(
  ({ className, fullWidth, type = "button", ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      className={cx(fullWidth && "w-full", className)}
      {...props}
    />
  )
);

ButtonBase.displayName = "ButtonBase";

export type ButtonProps = ButtonBaseProps & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
};

const sizeClasses: Record<ButtonSize, string> = {
  default:
    "rounded-[var(--ds-button-size-default-radius)] px-[var(--ds-button-size-default-padding-x)] py-[var(--ds-button-size-default-padding-y)] gap-[var(--ds-button-size-default-gap)]",
  small:
    "rounded-[var(--ds-button-size-small-radius)] px-[var(--ds-button-size-small-padding-x)] py-[var(--ds-button-size-small-padding-y)] gap-[var(--ds-button-size-small-gap)]"
};

const variantClasses: Record<ButtonVariant, string> = {
  filled: cx(
    "bg-[var(--ds-button-color-default-bg)] text-[color:var(--ds-button-color-default-text)]",
    "enabled:hover:[background:var(--c-button-filled-hover-background)] enabled:hover:shadow-[var(--ds-button-color-hover-shadow)]",
    "enabled:active:[background:var(--ds-button-color-pressed-bg)]",
    "disabled:opacity-[var(--ds-button-color-disabled-opacity)] disabled:shadow-none"
  ),
  outlined: cx(
    "bg-[var(--ds-button-outline-default-bg)] text-[color:var(--ds-button-outline-default-text)]",
    "border border-[var(--ds-button-outline-default-border-color)]",
    "enabled:hover:bg-[var(--ds-button-outline-hover-bg)] enabled:hover:shadow-[var(--ds-button-outline-hover-shadow)]",
    "enabled:active:bg-[var(--ds-button-outline-pressed-bg)]",
    "disabled:opacity-[var(--ds-button-outline-disabled-opacity)] disabled:shadow-none"
  ),
  text: cx(
    "bg-[var(--ds-button-text-default-bg)] text-[color:var(--ds-button-text-default-text)]",
    "enabled:hover:bg-[var(--ds-button-text-hover-bg)]",
    "enabled:active:bg-[var(--ds-button-text-pressed-bg)]",
    "disabled:opacity-[var(--ds-button-text-disabled-opacity)]"
  )
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "filled",
      size = "default",
      loading = false,
      disabled,
      iconLeft,
      iconRight,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;
    return (
      <ButtonBase
        ref={ref}
        className={cx(
          "inline-flex items-center justify-center font-semibold",
          "focus-visible:outline focus-visible:outline-[var(--ds-focus-ring-width)] focus-visible:outline-[var(--ds-focus-ring-color)] focus-visible:outline-offset-2",
          "transition-shadow [transition:background_800ms_ease] enabled:active:[transition:background_0ms_ease]",
          sizeClasses[size],
          variantClasses[variant],
          loading && "cursor-wait",
          className
        )}
        aria-busy={loading || undefined}
        disabled={isDisabled}
        {...props}
      >
        {iconLeft && <span className="inline-flex shrink-0">{iconLeft}</span>}
        <span className="inline-flex">{children}</span>
        {iconRight && <span className="inline-flex shrink-0">{iconRight}</span>}
      </ButtonBase>
    );
  }
);

Button.displayName = "Button";
