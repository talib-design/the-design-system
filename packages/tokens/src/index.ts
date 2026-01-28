import primitives from "./primitives.json";
import semantics from "./semantics.json";
import components from "./components.json";
import { focusRingStyle, prefersReducedMotion, srOnlyStyle } from "./a11y";
import { breakpoints, mq } from "./responsive";
import { buttonStyles, cardStyles, inputStyles } from "./styles";

export {
  primitives,
  semantics,
  components,
  focusRingStyle,
  prefersReducedMotion,
  srOnlyStyle,
  breakpoints,
  mq,
  buttonStyles,
  cardStyles,
  inputStyles
};

export type PrimitiveTokens = typeof primitives;
export type SemanticTokens = typeof semantics;
export type ComponentTokens = typeof components;

export type Tokens = {
  primitives: PrimitiveTokens;
  semantics: SemanticTokens;
  components: ComponentTokens;
};
