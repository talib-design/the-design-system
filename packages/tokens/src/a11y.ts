export const focusRingStyle = {
  outline: "var(--ds-focus-ring-width) solid var(--ds-focus-ring-color)"
};

export const srOnlyStyle = {
  border: 0,
  clip: "rect(0 0 0 0)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "absolute" as const,
  width: "1px",
  whiteSpace: "nowrap" as const
};

export const prefersReducedMotion = (): boolean => {
  if (typeof window === "undefined" || !window.matchMedia) {
    return false;
  }
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};
