import * as React from "react";
import { cx } from "../shared/cx";

export type RadioGroupContextValue = {
  name?: string;
  value: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
};

export const RadioGroupContext = React.createContext<RadioGroupContextValue | null>(null);

export type RadioGroupProps = {
  name?: string;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  ariaLabel?: string;
  ariaLabelledby?: string;
  className?: string;
  children: React.ReactNode;
};

export function RadioGroup({
  name,
  value,
  defaultValue,
  onValueChange,
  disabled,
  ariaLabel,
  ariaLabelledby,
  className,
  children
}: RadioGroupProps) {
  const [internalValue, setInternalValue] = React.useState(defaultValue ?? "");
  const currentValue = value ?? internalValue;

  const handleValueChange = (next: string) => {
    onValueChange?.(next);
    if (value === undefined) {
      setInternalValue(next);
    }
  };

  return (
    <RadioGroupContext.Provider
      value={{ name, value: currentValue, onValueChange: handleValueChange, disabled }}
    >
      <div
        role="radiogroup"
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledby}
        className={cx("grid gap-[var(--ds-space-2)]", className)}
      >
        {children}
      </div>
    </RadioGroupContext.Provider>
  );
}
