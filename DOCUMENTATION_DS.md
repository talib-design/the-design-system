# Documentation Design System

## Lancer Storybook

```bash
npm install
npm run storybook
```

Storybook démarre sur `http://localhost:6006`.

## Ajouter une story

1. Crée un fichier `Component.stories.tsx` dans le dossier du composant :
   `packages/ui/src/components/Component/Component.stories.tsx`
2. Utilise `tags: ["autodocs"]` et définis des `argTypes` propres.
3. Ajoute au minimum une story `Playground` et une story `States`.

## Conventions props & accessibilité

### IDs et ARIA

- Ne jamais laisser `...props` écraser un `id` généré en interne.
- Pattern recommandé :
  - `const id = props.id ?? internalId;`
  - puis `...props` AVANT `id={id}` (ou retirer `id` de `props`).
- Les couples ARIA doivent être cohérents :
  - `aria-controls` ↔ `id`
  - `aria-labelledby` ↔ `id`
  - `aria-describedby` ↔ `id`

### Contrôlé vs non‑contrôlé

- Les composants de formulaire doivent respecter le comportement natif.
- `RadioGroup` : une seule valeur sélectionnée, pas de toggle off.
- `Checkbox` / `Switch` : `checked` / `defaultChecked` supportés, label cliquable.

### Accessibilité minimale

- Utiliser des éléments natifs (`button`, `input`, `select`) quand possible.
- Focus visible systématique.
- `aria-invalid` + `aria-describedby` si error/helper text.
- `Modal`: `aria-labelledby` requis (title).

### Pattern recommandé pour les props

- Props critiques (id/role/aria/type) doivent être explicitement gérées.
- Utiliser `Omit<...>` pour éviter collisions si un prop est contrôlé par le composant.

## Documenter un nouveau composant

Inclure dans les docs du composant :

- Description
- Quand l’utiliser / quand éviter
- API props (TypeScript)
- Variants / sizes / states supportés
- Accessibilité (clavier, aria, focus)
- Guidelines (dos/don’ts)
- Exemples (code snippet)
- Tokens utilisés

Les tokens doivent provenir de `packages/tokens` et être référencés par leurs
CSS variables (`--ds-*`).
