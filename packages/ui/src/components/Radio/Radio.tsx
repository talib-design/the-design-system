import * as React from "react";
import { cx } from "../shared/cx";
import { RadioGroupContext } from "./RadioGroup";

export type RadioProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type"
> & {
  label?: string;
};

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  (
    { id, label, disabled, className, name, checked, onChange, value, ...props },
    ref
  ) => {
    const inputId = id ?? React.useId();
    const group = React.useContext(RadioGroupContext);
    const isGrouped = Boolean(group) && value !== undefined;
    const resolvedName = name ?? group?.name;
    const resolvedDisabled = disabled ?? group?.disabled;
    const resolvedChecked = isGrouped ? group?.value === String(value) : checked;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (isGrouped) {
        group?.onValueChange?.(String(value));
      }
      onChange?.(event);
    };

    return (
      <label
        htmlFor={inputId}
        className={cx(
          "group inline-flex items-center gap-[var(--ds-space-2)]",
          resolvedDisabled ? "cursor-not-allowed" : "cursor-pointer"
        )}
      >
        <input
          id={inputId}
          ref={ref}
          type="radio"
          name={resolvedName}
          checked={resolvedChecked}
          onChange={isGrouped ? handleChange : onChange}
          disabled={resolvedDisabled}
          className="peer sr-only"
          value={value}
          {...props}
        />
        <span
          className={cx(
            "relative inline-flex size-[20px] items-center justify-center rounded-full border border-solid",
            "border-[var(--ds-border-strong)] bg-transparent",
            "group-hover:border-[var(--ds-border-brand)] group-hover:bg-[var(--ds-bg-brand-transparent-hover)]",
            "peer-focus-visible:outline peer-focus-visible:outline-[var(--ds-focus-ring-width)] peer-focus-visible:outline-[var(--ds-focus-ring-color)] peer-focus-visible:outline-offset-2",
            "peer-checked:border-[var(--ds-border-brand)] peer-checked:bg-[var(--ds-bg-brand-filled-default)]",
            "peer-disabled:opacity-[var(--ds-opacity-disabled)] peer-disabled:cursor-not-allowed",
            "peer-disabled:border-[var(--ds-border-strong)] peer-disabled:bg-transparent",
            className
          )}
        >
          <span className="size-[8px] rounded-full bg-[var(--ds-bg-layer100)] opacity-0 peer-checked:opacity-100" />
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

Radio.displayName = "Radio";
