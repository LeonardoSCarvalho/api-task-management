## Features

- ⛑ TypeScript
- 🧪 jest
- 📏 ESLint — To find and fix problems in your code
- 💖 Prettier — Code Formatter for consistent style
- 🐶 Husky — For running scripts before committing
- 🚓 Commitlint — To make sure your commit messages follow the convention
- 🚫 lint-staged — Run ESLint and Prettier against staged Git files
- ⚙️ EditorConfig - Consistent coding styles across editors and IDEs
- 🗂 Path Mapping — Import components or images using the `@` prefix
- ‽ Either Error Handler - For error handling. (Either is designed to hold either a left or a right value but never both).

### Requirements

- Node.js >= 12.22.0
- npm our yarn

### Directory Structure

- [`.husky`](.husky) — Husky configuration and hooks.<br>
- [`tests`](./tests) — Tests source code,including domain, application, infrastructure, main and shared.<br>
- [`src`](./src) — Application source code, including domain, application, infrastructure, main and shared.<br>

### Scripts

- `yarn/npm start:dev` — Starts the application in development mode.
- `yarn/npm build` — Creates an optimized production build of your application.
- `yarn/npm start` — Starts the application in production mode.
- `yarn/npm test` — Runs tests for all files in the `tests` directory.

### Path Mapping

TypeScript/Node are pre-configured with custom path mappings. To import components or files, use the `@` prefix.
