# Demo API tests with Jest and SuperTest

[![jest](https://facebook.github.io/jest/img/jest-badge.svg)](https://github.com/facebook/jest)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Action Status](https://github.com/WarleyGabriel/demo-api-tests/workflows/CI/badge.svg)](https://github.com/WarleyGabriel/demo-api-tests/actions)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Demo API tests** is a demonstration project of API tests.  
These tests are developed in TypeScript with [Jest](https://jestjs.io/docs/en/getting-started) and [SuperTest](https://github.com/visionmedia/supertest).  
We are using [FakeRestAPI.Web](https://fakerestapi.azurewebsites.net/swagger/ui/index#!/Books/) as a system.

## Features

-   TypeScript
-   Jest
-   SuperTest
-   [Commit lint](https://github.com/conventional-changelog/commitlint) and [Commitizen](https://github.com/commitizen/cz-cli#making-your-repo-commitizen-friendly)
-   ESlint
-   Prettier
-   Husky
-   Github Actions
-   [Jest HTML Reporter](https://github.com/dkelosky/jest-stare) on [Github Pages](http://warleygabriel.github.io/demo-api-tests)

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
 PASS  dist/specs/Books.test.js (7.384 s)
  Managing books
    ✓ /GET - All books (1096 ms)
    ✓ /GET - An specific book (1101 ms)
    ✓ /POST - A new book (1217 ms)
    ✓ /PUT - Update a book (1229 ms)
    ✓ /DELETE - Remove a book (1228 ms)
    ✓ /CONTRACT - Check contract of getting books (1076 ms)

Test Suites: 1 passed, 1 total
Tests:       6 passed, 6 total
Snapshots:   0 total
Time:        8.16 s, estimated 13 s
Ran all test suites matching /.\/dist\/specs\/Books.test.js/i.
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
