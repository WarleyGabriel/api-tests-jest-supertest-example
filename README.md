Demo API tests with Mocha and Chai
=================

**Demo API tests** is a demonstration project that check response of server and validate the contract.  
These tests are developed in JS with [Mocha](https://mochajs.org/) and [Chai](https://www.chaijs.com/).

Requirements
---------------

- node >= 10.15.x - [how to install Node](https://nodejs.org/en/download/)
- yarn >= 1.16.x - [how to install Yarn](https://yarnpkg.com/en/docs/install#debian-stable)

Getting Started
---------------

Install the dependencies:

```bash
yarn install
```

Run api tests:

```bash
yarn run tests:api
```

Allure Report
---------------

![alt text](https://github.com/WarleyGabriel/demo-api-tests/blob/master/images/allure-report.png)

Run this command to generate the allure report in the directory `./allure-report`:

```bash
yarn report:generate
```

You can run this command to start a server on your machine and open the allure report on the browser:

```bash
yarn report:open
```

Eslint and Prettier
---------------

Run check lint:

```bash
yarn code:check
```

Run format lint:

```bash
yarn code:format
```
