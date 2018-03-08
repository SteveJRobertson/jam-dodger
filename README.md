[![GitHub version](https://badge.fury.io/gh/SteveJRobertson%2Fjam-dodger.svg)](https://badge.fury.io/gh/SteveJRobertson%2Fjam-dodger) ![Dependencies](https://david-dm.org/SteveJRobertson/jam-dodger.svg) ![DevDependencies](https://david-dm.org/SteveJRobertson/jam-dodger/dev-status.svg) [![CircleCI](https://circleci.com/gh/SteveJRobertson/jam-dodger.svg?style=shield&circle-token=851e977db0692dbefa8d02e324c02c85a0d8618b)](https://circleci.com/gh/SteveJRobertson/jam-dodger) [![Maintainability](https://api.codeclimate.com/v1/badges/2e894dc23919978c2424/maintainability)](https://codeclimate.com/github/SteveJRobertson/jam-dodger/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/2e894dc23919978c2424/test_coverage)](https://codeclimate.com/github/SteveJRobertson/jam-dodger/test_coverage)

# JamDodger

A Twitter-based traffic news app, bringing the latest updates to your phone and reading them aloud as you drive.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find out more about Create React App by reading the [documentation](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).


## Installation

In order to run the app locally, clone this repository and run `npm install` in your terminal.

Once installed, run the app with the `npm start` command to build a development version running on `http://localhost:3030`.

To create a production build, use `npm build`.

## Style guide

JamDodger has a styleguide build using [React Styleguidist](https://github.com/styleguidist/react-styleguidist).

Simply run `npm run styleguide` to open the style guide at `http://localhost:6060`.

## Unit tests

Run the unit tests with `npm test`. This will run the tests then watch for changes. You can get a code coverage report by running `npm test -- --coverage`. This will generate an [Istanbul](https://github.com/gotwarlost/istanbul) coverage report in the `/coverage` directory.

## Integration tests

Integration tests have been written using [Cypress.io](https://www.cypress.io/). Run the tests with `npm run cypress:open`.

## Continuous Integration

[CircleCI](https://circleci.com/) is being used for Continuous Integration. The CircleCI configuration can be found in `/.circleci/config.yml`.

[CodeClimate](https://codeclimate.com/) is also in use to monitor code quality and test coverage. This can be set up by visiting the [CodeClimate website](https://codeclimate.com/) and linking your GitHub account.

## Deploying to GitHub Pages

The app can be deployed to GitHub pages. Firstly update the `homepage` property in `package.json` to point to your own GH pages location then run `npm run deploy` to create a production build and deploy it.

