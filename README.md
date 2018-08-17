# Playground

A library of generic and reusable components

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Installation

- Download latest solution to your localhost (https://github.com/ndimphiwem/playground)
- After download navigate to root folder, Run `npm install` to fetch latest dependencies.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Contributing to Project

Version control [Understanding the GitHub Flow](https://guides.github.com/introduction/flow/)

Basic commit message convention types:
-	feat (feature)
-	fix (bug fix)
-	docs (documentation)
-	refactor (style changes, updates)
-	test (when adding missing tests)

Format: `Type(scope): jira task description (jira task ID)`

Example commit: `refactor(carousel): add added left and right arrows and their associated functionality #CAS-0000`

## Documentation

Install compodoc with npm

```
npm install -g @compodoc/compodoc
```

Run compodoc in your project and serve it

```
compodoc src -s
```

Function comment example:

```
/**
 * @param {string} target  The target to process see {@link Todo}
 *
 * @example
 * This is a good example
 * processTarget('yo')
 *
 * @returns      The processed target number
 */
function processTarget(target:string):number;
```

Full [Getting started](https://compodoc.github.io/website/guides/getting-started.html) guide with Compodoc.

Compodoc [Demo](https://compodoc.github.io/compodoc-demo-todomvc-angular/)


## Style Guides

CSS Style Guide: [SASS BEM](http://getbem.com/introduction/)

Code Style Guide: [Angular](https://angular.io/guide/styleguide)