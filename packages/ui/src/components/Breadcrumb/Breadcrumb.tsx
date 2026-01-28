import * as React from "react";
import { cx } from "../shared/cx";

export type BreadcrumbProps = React.HTMLAttributes<HTMLElement> & {
  separator?: React.ReactNode;
};

export function Breadcrumb({
  separator = ">",
  className,
  children,
  ...props
}: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={className} {...props}>
      <ol className="flex items-center gap-[var(--ds-space-2)]">{children}</ol>
      <span className="sr-only">{separator}</span>
    </nav>
  );
}

export type BreadcrumbItemProps = React.LiHTMLAttributes<HTMLLIElement> & {
  current?: boolean;
};

export function BreadcrumbItem({
  current,
  className,
  children,
  ...props
}: BreadcrumbItemProps) {
  return (
    <li
      aria-current={current ? "page" : undefined}
      className={cx(
        "flex items-center gap-[var(--ds-space-2)]",
        current ? "text-[var(--ds-text-primary)]" : "text-[var(--ds-text-secondary)]",
        className
      )}
      {...props}
    >
      {children}
    </li>
  );
}

export type BreadcrumbLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  current?: boolean;
};

export function BreadcrumbLink({
  current,
  className,
  children,
  ...props
}: BreadcrumbLinkProps) {
  return (
    <a
      className={cx(
        "text-[var(--ds-text-base)] leading-[var(--ds-text-2xl)]",
        current
          ? "text-[var(--ds-text-primary)]"
          : "text-[var(--ds-text-secondary)] hover:text-[var(--ds-text-brand)] hover:font-bold",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}

export function BreadcrumbSeparator({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      aria-hidden="true"
      className={cx("text-[var(--ds-text-secondary)]", className)}
      {...props}
    >
      /
    </span>
  );
}
