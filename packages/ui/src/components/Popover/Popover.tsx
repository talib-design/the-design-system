import * as React from "react";
import { createPortal } from "react-dom";
import { cx } from "../shared/cx";

type PopoverContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
  triggerRef: React.MutableRefObject<HTMLElement | null>;
};

const PopoverContext = React.createContext<PopoverContextValue | null>(null);

export type PopoverProps = {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
};

export type Placement =
  | "bottom-center"
  | "bottom-end"
  | "bottom-start"
  | "top-end"
  | "top-start";

type ComputePositionArgs = {
  triggerRect: DOMRect;
  contentRect: DOMRect;
  viewportWidth: number;
  viewportHeight: number;
  offset: number;
  viewportPadding: number;
  placements: Placement[];
};

type PositionResult = {
  top: number;
  left: number;
  placement: Placement;
};

export function computePosition({
  triggerRect,
  contentRect,
  viewportWidth,
  viewportHeight,
  offset,
  viewportPadding,
  placements
}: ComputePositionArgs): PositionResult {
  const fits = (top: number, left: number) => {
    const right = left + contentRect.width;
    const bottom = top + contentRect.height;
    return (
      left >= viewportPadding &&
      top >= viewportPadding &&
      right <= viewportWidth - viewportPadding &&
      bottom <= viewportHeight - viewportPadding
    );
  };

  const positionFor = (placement: Placement) => {
    const top =
      placement.startsWith("bottom")
        ? triggerRect.bottom + offset
        : triggerRect.top - offset - contentRect.height;
    let left = triggerRect.left;
    if (placement.endsWith("center")) {
      left = triggerRect.left + (triggerRect.width - contentRect.width) / 2;
    } else if (placement.endsWith("end")) {
      left = triggerRect.right - contentRect.width;
    }
    return { top, left };
  };

  for (const placement of placements) {
    const { top, left } = positionFor(placement);
    if (fits(top, left)) {
      return { top, left, placement };
    }
  }

  const fallbackPlacement = placements[0] ?? "bottom-center";
  const fallback = positionFor(fallbackPlacement);
  const clampedLeft = Math.min(
    Math.max(fallback.left, viewportPadding),
    viewportWidth - viewportPadding - contentRect.width
  );
  const clampedTop = Math.min(
    Math.max(fallback.top, viewportPadding),
    viewportHeight - viewportPadding - contentRect.height
  );

  return { top: clampedTop, left: clampedLeft, placement: fallbackPlacement };
}

const DEFAULT_PLACEMENTS: Placement[] = [
  "bottom-center",
  "bottom-end",
  "bottom-start",
  "top-end",
  "top-start"
];

const resolveOffsetPx = (token: string, fallback: number) => {
  if (typeof window === "undefined") return fallback;
  if (!token) return fallback;
  const trimmed = token.trim();
  const directValue = Number.parseFloat(trimmed);
  if (!Number.isNaN(directValue) && trimmed.endsWith("px")) return directValue;
  if (!Number.isNaN(directValue) && !trimmed.startsWith("var(") && !trimmed.startsWith("--")) {
    return directValue;
  }
  const varName = trimmed.startsWith("var(")
    ? trimmed.slice(4, -1).trim()
    : trimmed.startsWith("--")
      ? trimmed
      : `--${trimmed}`;
  const value = getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
  const parsed = Number.parseFloat(value);
  return Number.isNaN(parsed) ? fallback : parsed;
};

const assignRef = <T,>(ref: React.ForwardedRef<T>, value: T | null) => {
  if (typeof ref === "function") {
    ref(value);
    return;
  }
  if (ref) {
    (ref as React.MutableRefObject<T | null>).current = value;
  }
};

export function Popover({
  open,
  defaultOpen,
  onOpenChange,
  children
}: PopoverProps) {
  const [internal, setInternal] = React.useState(Boolean(defaultOpen));
  const isOpen = open ?? internal;
  const setOpen = (next: boolean) => {
    onOpenChange?.(next);
    if (open === undefined) setInternal(next);
  };
  const triggerRef = React.useRef<HTMLElement>(null);

  return (
    <PopoverContext.Provider value={{ open: isOpen, setOpen, triggerRef }}>
      <div className="relative inline-flex">{children}</div>
    </PopoverContext.Provider>
  );
}

export const PopoverTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, onClick, ...props }, forwardedRef) => {
  const ctx = React.useContext(PopoverContext);
  if (!ctx) throw new Error("PopoverTrigger must be used within Popover");

  const setRefs = (node: HTMLButtonElement | null) => {
    ctx.triggerRef.current = node;
    assignRef(forwardedRef, node);
  };

  return (
    <button
      ref={setRefs}
      type="button"
      aria-haspopup="dialog"
      aria-expanded={ctx.open}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) {
          ctx.setOpen(!ctx.open);
        }
      }}
      className={className}
      {...props}
    />
  );
});

PopoverTrigger.displayName = "PopoverTrigger";

export type PopoverContentProps = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * CSS variable name or var() expression used as vertical offset.
   * Example: "--ds-space-2" or "var(--ds-space-2)".
   */
  offsetToken?: string;
  /** Minimum padding from viewport edges in pixels. */
  viewportPaddingPx?: number;
  /** Render in a portal (default: true). */
  portal?: boolean;
  /** Override placement order. */
  placements?: Placement[];
};

export const PopoverContent = React.forwardRef<HTMLDivElement, PopoverContentProps>(
  (
    {
      className,
      offsetToken = "--ds-space-2",
      viewportPaddingPx = 16,
      portal = true,
      placements = DEFAULT_PLACEMENTS,
      style,
      ...props
    },
    forwardedRef
  ) => {
  const ctx = React.useContext(PopoverContext);
  if (!ctx) throw new Error("PopoverContent must be used within Popover");
  if (!ctx.open) return null;
    const contentRef = React.useRef<HTMLDivElement | null>(null);
    const [position, setPosition] = React.useState<PositionResult | null>(null);

    const setRefs = (node: HTMLDivElement | null) => {
      contentRef.current = node;
      assignRef(forwardedRef, node);
    };

    const updatePosition = React.useCallback(() => {
      if (!ctx.triggerRef.current || !contentRef.current) return;
      const triggerRect = ctx.triggerRef.current.getBoundingClientRect();
      const contentRect = contentRef.current.getBoundingClientRect();
      const offset = resolveOffsetPx(offsetToken, 8);
      const next = computePosition({
        triggerRect,
        contentRect,
        viewportWidth: window.innerWidth,
        viewportHeight: window.innerHeight,
        offset,
        viewportPadding: viewportPaddingPx,
        placements
      });
      setPosition((prev) => {
        if (
          prev &&
          Math.abs(prev.top - next.top) < 0.5 &&
          Math.abs(prev.left - next.left) < 0.5
        ) {
          return prev;
        }
        return next;
      });
    }, [ctx.triggerRef, offsetToken, viewportPaddingPx, placements]);

    React.useLayoutEffect(() => {
      if (!ctx.open) return;
      updatePosition();
      const raf = requestAnimationFrame(updatePosition);
      return () => cancelAnimationFrame(raf);
    }, [ctx.open, updatePosition]);

    React.useEffect(() => {
      if (!ctx.open) return;
      const handleScroll = () => updatePosition();
      const handleResize = () => updatePosition();
      window.addEventListener("scroll", handleScroll, true);
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("scroll", handleScroll, true);
        window.removeEventListener("resize", handleResize);
      };
    }, [ctx.open, updatePosition]);

    React.useEffect(() => {
      if (!ctx.open) return;
      const handlePointerDown = (event: PointerEvent) => {
        const target = event.target as Node;
        if (contentRef.current?.contains(target)) return;
        if (ctx.triggerRef.current?.contains(target)) return;
        ctx.setOpen(false);
      };
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape") ctx.setOpen(false);
      };
      document.addEventListener("pointerdown", handlePointerDown);
      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.removeEventListener("pointerdown", handlePointerDown);
        document.removeEventListener("keydown", handleKeyDown);
      };
    }, [ctx.open, ctx]);

    const content = (
      <div
        ref={setRefs}
        role="dialog"
        aria-modal="false"
        className={cx(
          "fixed z-10 min-w-[240px] w-[320px]",
          "rounded-[var(--ds-radius-lg)] border border-[var(--ds-border-default)] bg-[var(--ds-bg-layer100)]",
          "p-[var(--ds-space-4)] shadow-[var(--ds-shadow-neutral-md)]",
          className
        )}
        style={{
          top: position?.top ?? 0,
          left: position?.left ?? 0,
          ...style
        }}
        {...props}
      />
    );

    if (!portal) return content;
    return typeof document === "undefined" ? null : createPortal(content, document.body);
  }
);

PopoverContent.displayName = "PopoverContent";
