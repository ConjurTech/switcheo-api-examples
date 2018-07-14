# Switcheo API Examples

Examples for using the [Switcheo API](https://conjurtech.github.io/switcheo-docs/).

## Setup

1. Install [Node.js](https://nodejs.org/)
1. Install [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
2. Run `npm install` or `yarn install` within the root folder

## Running Examples

Before running the examples, the following variables need to be setup:
1. The `address` and `privateKey` of your user in `src/user.js`
2. The `API_URL` and `CONTRACT_HASH` in `src/config.js`

Once the variables have been setup, files can be run with `node <file path>`.

For example:
```
node src/examples/tickers/candlesticks.js
```
