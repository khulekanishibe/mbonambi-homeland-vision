# CRUSH.md

## Commands

- **Dev:** `npm run dev`
- **Build:** `npm run build`
- **Lint:** `npm run lint`
- **Preview:** `npm run preview`

## Code Style

- **Frameworks:** React, Vite, Tailwind CSS
- **Language:** TypeScript
- **Formatting:** Consistent with Prettier (implied by dependencies).
- **Imports:**
  - Use named imports.
  - Group imports: 1. external libraries, 2. internal components, 3. styles/assets.
- **Naming:**
  - Components: `PascalCase` (e.g., `MyComponent.tsx`)
  - Variables/Functions: `camelCase`
  - Types/Interfaces: `PascalCase` (e.g., `type MyType = {}`)
- **Types:**
  - Use TypeScript for all new code.
  - Define props with interfaces or types.
  - Avoid `any` type; use `unknown` for stricter typing.
- **Error Handling:** Use `try...catch` for async operations and error boundaries for components.
- **Components:**
  - Keep components small and focused on a single responsibility.
  - Use functional components with hooks.

## Miscellaneous

- All new files should be created in the `src` directory unless they are static assets, which go in `public`.
- For UI components, utilize the existing `shadcn/ui` library.
- When adding new dependencies, use `npm install`.

## Copilot Instructions

- Always use `byterover-retrive-knowledge` tool to get related context before any tasks.
- Always use `byterover-store-knowledge` to store all critical information after successful tasks.
