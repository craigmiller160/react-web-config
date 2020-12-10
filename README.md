# react-web-config

A utility library containing configuration and setup code for webapps.

## Project Setup

Other than adding this library, there are a few rules for any project using this configuration.

1. All source code must be in the `<rootDir>/src` directory.
1. All test code must be in the `<rootDir>/test` directory, and must end with `.test.{ext}` suffix.
1. If Cypress is used, it must be in the `<rootDir/cypress` directory.

Also, there is a known, strange bug with a version clash of `es-abstract`. Please add the following resolution to the `package.json` to fix it. Also, there's a bug with `@babel/runtime` and `webpack`, so you must enforce that version as well.

```
"resolutions": {
    "es-abstract": "^1.18.0-next.1",
    "@babel/runtime": "^7.12.5"
}
```

## Polyfills

For applications in need of polyfills, they are provided by this package. Simply add the following line to the beginning of the `index` file of the application:

```
import '@craigmiller160/web-config/polyfills'
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

TypeScript support is standard. Any command that is run will auto-generate a `tsconfig.json` file internally, and then place a `tsconfig.json` file in the root of the project that extends the internal one. If a custom `tsconfig.json` file already exists in the project, this will be overwritten.

To force the creation of the TypeScript config, please use the following command:

`web-config-scripts tsInit`

For building a TypeScript library, the output directory will be `<rootDir/lib`. This is done with this command:

`web-config-scripts buildTSLib`

If you do not want a `tsconfig.json` generated for your project, add the following property to your `package.json`:

```
{
    "noTsconfig": true
}
```

## Full Project Validation

To run a combined ESLint/Unit Test suite, use this command:

`web-config-scripts validate`

## Webpack Build

There is a fully constructed, robust webpack configuration in this project. It can easily be integrated into any project. It is fully optimized and good to go.

To run a webpack build, use the following script:

`web-config-scripts webpack`

To run a webpack build with the Analyzer enabled, use the following script:

`web-config-scripts webpackAnalyze`

## Webpack Dev Server

The provided webpack config supports the Webpack Dev Server as well. It is already fully configured, outside of a few options through the Project Config.

To run the dev server, use the following script:

`web-config-scripts devServer`

## Project Config

Customizations for the webpack build are defined in the `<rootDir>/project.config.js` file, which can optionally be provided by the project using this library. The following properties are supported by the Project Config. Their default values are shown here. These values are used if they are not provided.

```
{
    title: 'Webpack Application',
    htmlTemplatePath: 'index.template.html',
    devServerPort: 3000,
    devServerHttps: false,
    devServerProxy: {},
    publicPath: '/',
    jestSetupFiles: []
}
```

Unlike other config files, each property is optional. The default values shown above will be used if any property is not provided.

For the `devServerProxy` configuration, an object matching the definition of the Webapck Dev Server's proxy settings is expected.
