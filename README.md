# web-config

A utility library containing configuration and setup code for webapps.

## Project Setup

Other than adding this library, there are a few rules for any project using this configuration.

1. All source code must be in the `<rootDir>/src` directory.
1. All test code must be in the `<rootDir>/test` directory, and must end with `.test.{ext}` suffix.
1. If Cypress is used, it must be in the `<rootDir/cypress` directory.

## Eslint

All eslint configuration and dependencies for both JavaScript and TypeScript are included here.

If a custom eslint configuration is needed, it will be searched for in the parent project here: `<rootDir>/eslint.config.js`.

By default, this internal eslint config is used: `eslint/index.js`.

To run eslint, use this NPM script: `web-config-scripts lint`.

## Jest

All jest configurations and dependencies for both JavaScript & TypeScript are included here.

If a custom jest configuration is needed, it will be searched for in the parent project here: `<rootDir>/jest.config.js`.

By default, this internal jest config is used: `jest/index.js`.

To run jest, use this NPM script: `web-config-scripts test`.
