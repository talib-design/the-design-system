# UI Components (tokens-first)

This package contains React + TypeScript UI components styled exclusively with design tokens (CSS variables / Tailwind preset).

## Usage

```tsx
import { Button, Input, Card, CardHeader, CardContent, CardFooter } from "@octo/ui";
import "@octo/tokens/src/tokens.css";
```

### Button

```tsx
<Button variant="filled" size="default">CTA</Button>
<Button variant="outlined" size="small" iconLeft={<span>★</span>}>
  Outline
</Button>
```

### Input

```tsx
<Input label="Email" placeholder="you@example.com" helperText="Helper text" />
<Input label="Email" placeholder="you@example.com" error helperText="Invalid email" />
```

### RadioGroup

```tsx
import { Radio, RadioGroup } from "@octo/ui";

function Example() {
  const [value, setValue] = React.useState("option-a");
  return (
    <RadioGroup name="options" value={value} onValueChange={setValue}>
      <Radio label="Option A" value="option-a" />
      <Radio label="Option B" value="option-b" />
      <Radio label="Option C" value="option-c" />
    </RadioGroup>
  );
}
```

### Card

```tsx
<Card size="md">
  <CardHeader>
    <h3 className="text-xl">Title</h3>
  </CardHeader>
  <CardContent>
    <p className="text-base">Body content</p>
  </CardContent>
  <CardFooter>
    <Button variant="text">Action</Button>
  </CardFooter>
</Card>
```

## Inventory status

Implemented from Figma:
- Button (filled / outlined / text, sizes default/small, states default/hover/active/disabled)
- Input (default/hover/active/filled/error/disabled/readonly)
- Card (sm/md/lg, header/content/footer slots)
- Alert (success/info/warning/danger, title/description/action/close)
- Accordion (default/hover, expanded/collapsed)
- Breadcrumb (steps 2/3/4/5+, item states default/hover/click/current)
- Checkbox (default/error/disabled, checked/unchecked/indeterminate)
- Switch (default/active, disabled)
- Radio (default/hover/pressed/disabled, checked/unchecked + list states)
- Modal (sm/md/lg + overlay)
- Popover
- Tooltip

Awaiting Figma specs for:
- Select / Dropdown
- Textarea

Once links are provided, I will implement them without inventing styles.

## Accessibility

All components use `focus-visible` ring tokens and proper ARIA attributes.

## Responsive

Use token breakpoints from `@octo/tokens` and the `mq()` helper for responsive adaptations.

# UI Components (tokens-first)

This package contains React + TypeScript UI components styled exclusively with design tokens (CSS variables / Tailwind preset).

## Usage

```tsx
import { Button, Input, Card, CardHeader, CardContent, CardFooter } from "@octo/ui";
import "@octo/tokens/src/tokens.css";
```

### Button

```tsx
<Button variant="filled" size="default">CTA</Button>
<Button variant="outlined" size="small" iconLeft={<span>★</span>}>
  Outline
</Button>
```

### Input

```tsx
<Input label="Email" placeholder="you@example.com" helperText="Helper text" />
<Input label="Email" placeholder="you@example.com" error helperText="Invalid email" />
```

### RadioGroup

```tsx
import { Radio, RadioGroup } from "@octo/ui";

function Example() {
  const [value, setValue] = React.useState("option-a");
  return (
    <RadioGroup name="options" value={value} onValueChange={setValue}>
      <Radio label="Option A" value="option-a" />
      <Radio label="Option B" value="option-b" />
      <Radio label="Option C" value="option-c" />
    </RadioGroup>
  );
}
```

### Card

```tsx
<Card size="md">
  <CardHeader>
    <h3 className="text-xl">Title</h3>
  </CardHeader>
  <CardContent>
    <p className="text-base">Body content</p>
  </CardContent>
  <CardFooter>
    <Button variant="text">Action</Button>
  </CardFooter>
</Card>
```

## Inventory status

Implemented from Figma:
- Button (filled / outlined / text, sizes default/small, states default/hover/active/disabled)
- Input (default/hover/active/filled/error/disabled/readonly)
- Card (sm/md/lg, header/content/footer slots)

Awaiting Figma specs for:
- Select / Dropdown
- Accordion
- Breadcrumb
- Checkbox
- Switch
- RadioButton
- Modal / Dialog
- Popover
- Textarea
- Tooltip

Once links are provided, I will implement them without inventing styles.

## Accessibility

All components use `focus-visible` ring tokens and proper ARIA attributes.

## Responsive

Use token breakpoints from `@octo/tokens` and the `mq()` helper for responsive adaptations.

