# Project Name

Short project description

## Getting Started

1. Clone/download repo
2. `yarn install` (or `npm install` for npm)

### Prerequisites

* **[React](https://facebook.github.io/react/)** (18.x)
* **[Webpack](https://webpack.js.org/)** (5.x)
* **[Typescript](https://www.typescriptlang.org/)**  (5.x)
* **[Hot Module Replacement (HMR)](https://webpack.js.org/concepts/hot-module-replacement/)** + [Fast Refresh](https://github.com/pmmmwh/react-refresh-webpack-plugin)
* Image support
* Fonts support
* [SASS](http://sass-lang.com/) support
* Production build script
* Code linting ([ESLint](https://github.com/eslint/eslint)) and formatting ([Prettier](https://github.com/prettier/prettier))

## Usage
**Development**

`npm run dev`

* Build app continuously (HMR enabled)
* App served @ `http://localhost:3000`

**Production**

`npm run prod`

* Build app once (HMR disabled) to `/build/`

---

**All commands**

Command | Description
--- | ---
`npm run dev` | Build app continuously (HMR enabled) and serve @ `http://localhost:3000`
`npm run build:prod` | Build app once (HMR disabled) to `/build/`
`npm run build:dev` | Build app to `/build/`
`npm run lint` | Run linter
`npm run lint:fix` | Run linter and fix issues
`npm run prettier` | Run prettier
`npm run prettier:fix` | Run prettier and fix issues

**Note**: replace `npm` with `yarn` in `package.json` if you use yarn.

### Folder Structure

The project structure looks like this:

- `public/`: This directory contains `index.html` file that serves as the entry point for the application.

- `build/`: This directory contains built project

- `config`: This directory contains configuration file for Webpack

- `src/`: This directory is the main source code directory.
    - `assets/`: This directory contains static assets such as images, fonts, icons, and the global styles.
    - `components/`: This directory contains React components used in the application.
      - `atomic/`: This directory contains tiny React components, like inputs, buttons, ets.
      - `base/`: This directory contains more complex React components, like forms, group of buttons, ets.
    - `contexts/`:  This directory typically contains context providers and related utility functions that manage global state or provide specific data and functionalities to components throughout the application.
    - `hooks/`: This directory is used for custom hooks, which are reusable functions that encapsulate common logic and can be shared across multiple components. Hooks enable code reuse and help simplify complex logic within functional components.
    - `layouts/`: This directory houses layout components that define the overall structure and composition of different pages or sections of your application. Layout components often include headers, footers, sidebars, or any other consistent elements across multiple pages.
    - `router/`: This directory typically contains the routing configuration and related components for client-side navigation within your application. It includes the setup of routes, route components, and any necessary navigation logic or utility functions. The router components handle rendering specific pages based on the defined routes and provide a seamless navigation experience for users.
    - `pages/`: This directory contains React components that represent components that render specific pages of your application.
    - `utils/`: This directory contains utility functions or modules that can be used across the application.
    - `App.tsx`: This file is the main application component that serves as the root of the component tree.
    - `index.tsx`: This file is the entry point for rendering the application and setting up the React DOM.

### Project Configurations

- `.eslintignore`: This file specifies the files and directories that should be ignored by ESLint

- `.eslintrc.js`: This file specifies the configurations of ESLint

- `.gitignore`: This file specifies the files and directories that should be ignored by Git version control.

- `.prettierignore`: This file specifies the rules that should be ignored by Prettier

- `.prettierrc`: This file specifies the rules of Prettier

- `.gitignore`: This file specifies the files and directories that should be ignored by Git version control.

- `tsconfig.json`: This file specifies the configs of Typescript

- `webpack.config.ts`: Entry point for webpack config

- `package.json`: This file lists the Node.js dependencies and includes scripts for various tasks such as starting the development server or building the application.

- `README.md`: This file is the project documentation that provides information about the project, its structure, and instructions for getting started.
