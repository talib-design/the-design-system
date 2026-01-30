# the-design-system

Le Design System est un DS en React + TypeScript construit à partir d’un kit UI Figma fortement inspiré de TailwindUI, avec une approche **tokens-first** (primitives → sémantiques → composants) et une documentation via **Storybook**.
Le kit UI a été créé sur Figma pour le projet Emmaüs Connect sur lequel je travaille avec BETO et YCWA
Ce Design System a été totalement généré par Gursor à partir de simples copier/coller de frames (écrans) Figma ou de captures d'écrans, accompagnés de prompt boostés à ChatPGPT.

## Pourquoi ce projet
L’objectif de ce projet est multiple : 
1. **Transformer un kit UI (Figma + variables) en un Design System codé**, réutilisable dans plusieurs apps, pour pouvoir implémenter des écrans rapidement sans repasser systématiquement par Figma.
2. Voir s'il est possible pour un designer de **faire facilement des corrections** sur des composants voir même sur des pages ou des parcours (en cours)
3. De manière générale, comprendre **ce qu'on pouvait faire avec les MCP** et mesurer l'impact que ça peut avoir sur nos métiers (ça a l'air lourd !)

## Ce que contient le repo
- **Design tokens** : couleurs, typographies, espacements, radius, shadows… + mapping sémantique.
- **UI components** : Button, Input, Select, Checkbox, Radio, Switch, Card, Modal, Popover, Tooltip, etc.
- **Storybook** : catalogue des composants + pages Foundations/Tokens pour visualiser les règles et les styles.

## Process (résumé)
1. **Extraction / structuration des tokens**
   - Reprise des éléments de Figma ou le kit UI est construit en Atomic Design
   - Définition des collections : `primitives` → `semantics` → `components`.
   - Exposition des tokens en **CSS variables** et mapping type **Tailwind**.
2. **Implémentation des composants**
   - Composants React + TypeScript basés sur les tokens (pas de valeurs hardcodées).
   - Gestion des variantes / tailles / états (hover, active, disabled, focus, error…).
   - Focus sur l’accessibilité : labels, navigation clavier, focus-visible.
3. **Documentation & validation**
   - Mise en place de Storybook pour tester visuellement les composants.
   - Stories “Playground” + “States” pour vérifier les comportements (clic, hover, sélection, disabled…).

## Structure
- `packages/tokens/` : design tokens + CSS variables + config/preset Tailwind
- `packages/ui/` : composants UI + stories Storybook
- `.storybook/` : configuration Storybook

## Lancer le projet
> Ajuste ces commandes selon ton package manager (npm/yarn/pnpm).
- Installer :
  - `npm install`
- Lancer Storybook :
  - `npm run storybook`
- Build (si présent) :
  - `npm run build`

## Next Steps
- Le DS est pensé pour être **réutilisable** : Je voudrais qu'on voit si c'est possible de créer un vrai projet à partir de celui-ci.
- Je voudrais avoir vos retours sur : 
  - La qualité du code généré
  - Vos avis sur l'impact de ce genre de pratiques sur nos métiers de développeurs et designers
- Je vais creuser le sujet sur les liens entre un IDE et Figma pour :
  - Lier le code aux composants dans le Mode Dev avec Figma Code
  - Voir si la MAJ d'un composant dans Figma se fait facilement dans Git

**Merci d'avances pour vos feedbacks !!!**


