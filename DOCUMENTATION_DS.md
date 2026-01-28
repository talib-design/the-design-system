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
