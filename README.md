# This setup has

- Reporters
- Husky (pre commit)
- Eslint
- Prettier
- Pre-settled custom commands, functions and methods for:
  - iframes
  - upload files
  - save and load cookies
- Node packages killer
- PR template

# Technologies

Project is created with:

- Use **node v14.17.1 (npm v8.7.0)**
- Cypress version: ^8.7.0
- Mocha : ^9.1.3
- Page Object pattern

# Workflow

- The main branch is `master`.
- The tasks you develop are pushed to branches for instance: `qa/add-tests/log-in`. Make sure you create a branch for every given task.
- Make a PR to the `master` branch, and add someone from the AQA team as a reviewer. **2 approves are required**. Much better if the reviewer knows the code/services/features/etc. The first one is from a lead or a middle/senior QA Automation engineer. The second one is from any team member engineer.
- Move the task to `Code review`
- Once the code review passed, the PR can be merged (squash is preferred) into the `master` branch.
- Move the task to the `merged in master` column.
- `cypress.env.json` file in .gitignore, it's a good manner to not share credentials, tokens, keys, etc. So, please, create this file by yourself at the root of the repository.

# IDE

Make sure you have those plugins installed:

- Code Spell Checker
- EditorConfig
- **ESLint**
- Prettier
- SonarLint

Recommended plugins:

- DotENV
- GitLens — Git supercharged
- TODO Highlight

# Installation

## Pre-requirements.

```bash
npm -v // will show your current npm version (should be ^8.7.0)
```

```bash
node -v // will show your current node version (should be ^14.17.1)
```

```bash
nvm use // https://github.com/nvm-sh/nvm, will setup node version, depends on .nvmrc file
npm install -g npm // should be ^8.7.0
```

<br>

### Make sure you have installed `eslint` globally:

```bash
npm install -g eslint
```

## Install dependencies:

```bash
npm install
```

<details>
  <summary>if husky (https://www.npmjs.com/package/husky) won't work run these commands (spoiler):</summary>

```
npm install -D husky lint-staged
npx mrm@2 lint-staged
```

</details>

<details>
  <summary>Next one IS NOT required (peer dependencies)</summary>

```bash
npm install -g npm-install-peers // This package helps you to install peer dependencies
```

```bash
npm-install-peers // This command will install all peer dependencies
```

</details>

# Running tests

## Run the tests (default browser is `Electron`, but you can change it):

https://docs.cypress.io/guides/guides/launching-browsers#Chrome-Browsers

```bash
npm run cy:run
```

## Run the tests and generate generate reports:

```bash
npm run cy:mocha
```

## Merge reports:

```bash
npm run combine:reports
```

now, you can find reports into `cypress/reports` folder

## How to delete node modules:

```bash
npx npkill
```

This is a way if you need this

# Afterwords

## About Cypress

- JavaScript End to End Testing Framework.
- Cypress has been made specifically for developers and QA engineers, to help them get more done.
- Cypress benefits from our amazing open source community - and our tools are evolving better and faster than if we worked on them alone.
- Cypress takes snapshots as your tests run. Simply hover over commands in the Command Log to see exactly what happened at each step.
- Debug directly from familiar tools like Chrome DevTools. Our readable errors and stack traces make debugging lightning fast.
- Cypress automatically reloads whenever you make changes to your tests.
- Cypress automatically waits for commands and assertions before moving on. No more async hell.

## Directory structure

- **constants** - save constants there (example inside).
- **fixtures** - contains test data.
- **integration** - contains integration test files (api/e2e etc.).
- **models** - takes the selectors from the page object and uses them to create functions(preferred) or methods such as login, create something new, edit something, delete something etc.
- **page-objects** folder - contains the page selectors.
- **plugins/index.ts** - import external plugins for Cypress or add code that runs in Node instead of browser.
- **reports** - you won't have this folder from the box, but you will (`yarn run cy:mocha`). There will store reports after runs.
  - Use `npm run cy:mocha` and then `npm run combine:reports` to generate reports.
- If screenshots were taken via the cy.screenshot() command or automatically when a test fails, the screenshots are stored in the screenshotsFolder which is set to **cypress/screenshots** by default.
- **support** folder includes:
  - `commands.ts` - allows to create custom commands and overwriting existing commands.
    chainable.
  - `index.ts` - allows to put reusable behavior such as custom commands or global overrides that you want applied and available to all of your spec files.
- `cypress.env.example.json` - this is an example of how could be `cypress.env.json` file. We don't share credentials through git because of privacy policy. Therefore create `cypress.env.json` in root and add all what you need bypass.
- `cypress.json` - the first time you open Cypress Test Runner, it creates the `cypress.json` configuration file. This JSON file is used to store any configuration values you supply.
# template
# template
# template
# template
