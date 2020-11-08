# web-config

A utility library containing configuration and setup code for webapps.

## Project Setup

Other than adding this library, there are a few rules for any project using this configuration.

1. All source code must be in the `<rootDir>/src` directory.
1. All test code must be in the `<rootDir>/test` directory, and must end with `.test.{ext}` suffix.
1. If Cypress is used, it must be in the `<rootDir/cypress` directory.

Also, there is a known, strange bug with a version clash of `es-abstract`. Please add the following resolution to the `package.json` to fix it:

```
"resolutions": {
    "es-abstract": "^1.18.0-next.1"
}
```

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

## TypeScript

TypeScript support is a bit more complicated due to limitations on the ability to setup shared `tsconfig.json` files. This is the only area where a configuration file needs to be added to your project.

First, there are two configuration files that can be extended. One produces ES2015 module output, and one has commonjs module output:
```
<rootDir>/typescript/tsconfig.esmodule.json
<rootDir>/typescript/tsconfig.commonjs.json
```
One of these must be extended in the consuming project in the file `<rootDir>/tsconfig.json`. The extended configuration must have these properties at minimum:
```
{
  "extends": "@craigmiller160/web-config/typescript/tsconfig.esmodule.json",
  "compilerOptions": {
    "outDir": "./lib"
  },
  "include": [
    "./src/**/*"
  ],
  "exclude": [
    "node_modules",
    "lib",
    ".yalc"
  ]
}
```
As can be seen, the files to include, exclude, and output directory all need to be setup locally.

For building a TypeScript library, the output directory MUST be set to `<rootDir/lib`, because that is the directory that will be cleaned up prior to the build. The following script will execute a TypeScript library build:

`web-config-scripts buildTSLib`

## Full Project Validation

To run a combined ESLint/Unit Test suite, use this command:

`web-config-scripts validate`
