## Demo API tests with Mocha and Chai

**Demo API tests** is a demonstration project that check response of server and validate the contract.<br/>
These tests are developed in JS with [Mocha](https://mochajs.org/) and [Chai](https://www.chaijs.com/)<br/>

#### Requirements

- node >= 10.15.x - [how to install Node](https://nodejs.org/en/download/)
- yarn >= 1.16.x - [how to install Yarn](https://yarnpkg.com/en/docs/install#debian-stable)

#### Getting Started

Install the dependencies:
```
yarn install
```

Run api tests:
```
yarn run api:tests
```

#### Allure Report

![alt text](https://github.com/WarleyGabriel/demo-api-tests/blob/master/images/allure-report.png)

If you don't have allure command line installed on your machine yet, follow the instructions [here](https://github.com/allure-framework/allure-docs/blob/master/docs/reporting/commandline.adoc).

After installing, run this command to generate the report:
```
yarn run report
```

You can run this command to start a server and open the report:
```
allure open allure-report
```

#### Eslint

Run check lint:
```
yarn run check
```

Run format lint:
```
yarn run format
```
