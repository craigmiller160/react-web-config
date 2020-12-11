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

Lastly, there is an initialization script. This sets up some configuration files that either require project information or need to be in special places in your project for maximum IDE support. To run this script, use:

```
web-config-scripts init
```

## Polyfills

For applications in need of polyfills, they are provided by this package. Simply add the following line to the beginning of the `index` file of the application:

```
import '@craigmiller160/react-web-config/polyfills'
```

## Eslint

All eslint configuration and dependencies for both JavaScript and TypeScript are included here.

If a custom eslint configuration is needed, it will be searched for in the parent project here: `<rootDir>/eslint.config.js`.

By default, this internal eslint config is used: `eslint/index.js`.

To run eslint, use this NPM script: `web-config-scripts lint`.

## Jest

All jest configurations and dependencies for both JavaScript & TypeScript are included here. In order to improve IDE support, when tests are run a jest.config.js file is created in the root of the project directory. This is needed for IDE support.

To get this file right away, run `web-config-scripts init`.

To run jest, use this NPM script: `web-config-scripts test`.

## TypeScript

TypeScript support is standard. While the goal of this overall project is to internally manage (and hide from the user) as much of the configuration as possible, this has at times conflicted with IDE support. TypeScript is a situation where this has occurred, so here is how it is handled.

This library will create a `tsconfig.base.json` file in the root of the project. This file will be managed by the library, and will be at times updated with any changes to the TypeScript settings that are necessary.

Next to it will be a `tsconfig.json` file. This will extend `tsconfig.base.json`, and is available for you to override any settings that you want.

This process will occur for any TypeScript actions such as building the project. To force it to happen, run the `web-config-scripts init` script.

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
