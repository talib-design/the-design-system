import * as React from "react";
import { cx } from "../shared/cx";

export type CardSize = "sm" | "md" | "lg";

export type CardBaseProps = React.HTMLAttributes<HTMLDivElement> & {
  size?: CardSize;
};

export const CardBase = React.forwardRef<HTMLDivElement, CardBaseProps>(
  ({ className, size = "md", ...props }, ref) => (
    <div ref={ref} className={cx(size, className)} {...props} />
  )
);

CardBase.displayName = "CardBase";

const sizeClasses: Record<CardSize, string> = {
  sm: "rounded-[var(--ds-card-sm-radius)] p-[var(--ds-card-sm-padding)] gap-[var(--ds-card-sm-gap)]",
  md: "rounded-[var(--ds-card-md-radius)] p-[var(--ds-card-md-padding)] gap-[var(--ds-card-md-gap)]",
  lg: "rounded-[var(--ds-card-lg-radius)] p-[var(--ds-card-lg-padding)] gap-[var(--ds-card-lg-gap)]"
};

export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  size?: CardSize;
};

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, size = "md", ...props }, ref) => (
    <CardBase
      ref={ref}
      size={size}
      className={cx(
        "flex flex-col border border-solid bg-[var(--ds-card-bg)] border-[var(--ds-card-border-color)]",
        sizeClasses[size],
        className
      )}
      {...props}
    />
  )
);

Card.displayName = "Card";

export const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cx("flex flex-col gap-[var(--ds-space-2)]", className)} {...props} />
  )
);

CardHeader.displayName = "CardHeader";

export const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cx("flex flex-col gap-[var(--ds-space-2)]", className)} {...props} />
  )
);

CardContent.displayName = "CardContent";

export const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cx("flex flex-wrap gap-[var(--ds-space-4)]", className)} {...props} />
  )
);

CardFooter.displayName = "CardFooter";
