# Demo API tests with Jest and SuperTest

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Action Status](https://github.com/WarleyGabriel/demo-api-tests/workflows/CI/badge.svg)](https://github.com/WarleyGabriel/demo-api-tests/actions)

**Demo API tests** is a demonstration project of API tests.  
These tests are developed in TypeScript with [Jest](https://jestjs.io/docs/en/getting-started) and [SuperTest](https://github.com/visionmedia/supertest).

## Features

-   TypeScript
-   Jest
-   SuperTest
-   [Commit lint](https://github.com/conventional-changelog/commitlint) and [Commitizen](https://github.com/commitizen/cz-cli#making-your-repo-commitizen-friendly)
-   ESlint
-   Prettier
-   Husky
-   Github Actions
-   Jest HTML Reporter on [Github Pages](http://warleygabriel.github.io/demo-api-tests)

## Requirements

-   node >= 12.x - [how to install Node](https://nodejs.org/en/download/)
-   npm >= 6.14.x - [how to install NPM](https://www.npmjs.com/get-npm)

## Getting Started

Install the dependencies:

```bash
npm install
```

Compile TypeScript:

```bash
npm run build
```

Run api tests:

```bash
npm run test
```

```text
 PASS  dist/specs/Books.test.js (5.796 s)
  Managing books
    ✓ /GET - All books (1490 ms)
    ✓ /GET - An specific book (856 ms)
    ✓ /POST - A new book (885 ms)
    ✓ /PUT - Update a book (928 ms)
    ✓ /DELETE - Remove a book (1249 ms)

Test Suites: 1 passed, 1 total
Tests:       5 passed, 5 total
Snapshots:   0 total
Time:        6.547 s, estimated 7 s
Ran all test suites matching /.\/dist\/specs\/Books.test.js/i.
jest-html-reporter >> Report generated (output/index.html)
```

## Watch mode

We also have watch mode for Jest and TypeScript:

```bash
npm run build:watch
npm run test:watch
```

## Prettier and Eslint

Run to format the code:

```bash
npm run code:format
```

## Commit

We use the best practices for message's commit, using [Commit lint](https://github.com/conventional-changelog/commitlint) and [Commitizen](https://github.com/commitizen/cz-cli#making-your-repo-commitizen-friendly) we can generate changelogs automatically.

Run `npm run commit` and commitizen will help you.
