# Tokens Package

Tokens-first design system generated from Figma variables and styles.

## Contents

- `src/primitives.json`: raw tokens from Figma variables.
- `src/semantics.json`: intent-based tokens referencing primitives.
- `src/components.json`: component-level tokens referencing semantics.
- `src/tokens.css`: CSS variables (light theme only).
- `tailwind.preset.ts`: Tailwind preset mapped to CSS variables.

## Naming Convention

- Primitives: `color.<family>.<step>`, `space.<step>`, `radius.<step>`, `text.<step>`, `border.<step>`, `shadow.<step>`.
- Semantics: `bg.*`, `text.*`, `border.*`, `icon.*`, `focus.*`.
- Components: `button.<variant>.<state>.<property>`, `input.<state>.<property>`, `card.<size>.<property>`.

## Usage (React)

### 1) CSS Variables

```tsx
import "@octo/tokens/src/tokens.css";

export function Button() {
  return (
    <button
      className="rounded-xl px-5 py-3 text-fg-invert"
      style={{
        backgroundColor: "var(--ds-bg-brand-filled-default)",
        boxShadow: "var(--ds-shadow-brand-lg)"
      }}
    >
      Button
    </button>
  );
}
```

### 2) Tailwind Preset

```ts
// tailwind.config.ts
import preset from "@octo/tokens/tailwind.preset";

export default {
  presets: [preset]
};
```

```tsx
export function Input() {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-fg-secondary text-sm">Label</label>
      <input
        className="rounded-xl border border-border-default bg-neutral-white px-4 py-3 text-fg-primary"
        placeholder="Placeholder"
      />
      <span className="text-fg-secondary text-xs">Helper text</span>
    </div>
  );
}
```

```tsx
export function Card() {
  return (
    <article className="rounded-lg border border-border-light bg-bg-layer100 p-4">
      <h3 className="text-fg-primary text-xl">Title</h3>
      <p className="text-fg-primary text-base">
        Vestibulum leo ipsum, sodales in dolor ut.
      </p>
    </article>
  );
}
```

## Themes

Only light theme is available in the provided Figma file.

## Traceability

Every token includes Figma metadata:
- `name` and `collection` for variables.
- `style` and `nodes` for text styles and components.

