# public-leetcode-codewars-tasks

[![Unit tests](https://github.com/denys-lbdv/public-leetcode-codewars-tasks/actions/workflows/unit-tests.yml/badge.svg)](https://github.com/denys-lbdv/public-leetcode-codewars-tasks/actions/workflows/unit-tests.yml) [Playwright report](https://denys-lbdv.github.io/public-leetcode-codewars-tasks/)

The current repository contains solutions for tasks from different sources for programming practice and fun.

## How to run unit tests

> npm run test:unit

or

> npx playwright test --config=playwright.config.ts

## How to run separate tasks in '.ts' file

### Option 1:

via terminal command'tsx' for execution '.ts' scripts:

> tsx .\05-feb-2026-task1.ts

### Option 2:

1. Based on the '.vscode/launch.json' file.
2. Click in the 'Run and Debug (Ctrl+Shift+D)' icon in the left navigation bar VSCode
3. Open specific '.ts' file which you want to execute
4. Select 'Run current TS with tsx' or 'Watch current TS with tsx' in the header menu
5. Click on the 'Play' icon

## Setup TypeScript project

Firstly need to create a tsconfig.json via executing next command in terminal:

> tsc --init

The file 'tsconfig.json' appears after it.
Modify the next:

- "module": "NodeNext"
- "rootDir": "./src"
- "allowJs": true,
- "checkJs": true,
- "outDir": "./",
- "sourceMap": true,
- "noEmitOnError": true,
- "noUnusedLocals": true, // helps you detect unused variable
- "noUnusedParameters": true, // helps you detect unused function parameters
- "noFallthroughCasesInSwitch": true // helps you detect switch cases without break or return

Aslo for using the libs from Node package you need to init the node project via command:

> npm init -y

The file 'package.json' appears, than update it with type field:

> "type":"module"

It allows to use `import fs from 'node:fs';` instead of `require()`  
In this case the TypeScript doesn't understand what is `'node:fs'` so we need to install one more package (similar packages is for react like '@types/react):

> npm install @types/node --save-dev

The next repor contains all types described [Definitely Typed](https://github.com/DefinitelyTyped/DefinitelyTyped)

Install 'tsx' to execute '.ts' file

```
npm install -g tsx
```

## Setup Playwrigt test

```
npm install @playwright/test
npx playwright install
```
