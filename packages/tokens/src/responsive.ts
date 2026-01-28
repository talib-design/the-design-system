import primitives from "./primitives.json";

type BreakpointKey = keyof typeof primitives.breakpoint;

export const breakpoints = primitives.breakpoint;

export const mq = (key: BreakpointKey) =>
  `@media (min-width: ${breakpoints[key].value})`;
