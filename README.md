# static-strata

[![Build Status](https://travis-ci.com/metonym/static-strata.svg?branch=master)](https://travis-ci.com/metonym/static-strata)

> CLI to scaffold a TypeScript project with Husky, Prettier, Commitlint and TSLint.

## Getting Started

```bash
yarn add -D static-strata
```

Running the following command will set up configuration for Husky hooks, Prettier, Commitlint and TSLint.

```bash
yarn strata
```

## [Example Project](example)

## Motivation

This project is inspired by Kent C. Dodd's seminal ["Write Tests. Not too many. Mostly integration."](https://kentcdodds.com/blog/write-tests), where he extols the benefits of using a static type system and tooling.

While a static type system and tooling will not substitute a comprehensive test suite, they can alleviate the burden of writing superfluous runtime checks, boosting performance and developer productivity.

## Static Type System

The static type system is implemented using [TypeScript](https://www.typescriptlang.org/).

## Tooling

Static tooling contains a mix of linting, code formatting and enforcing semantic commit messages. These tools are run in an automated fashion using git hooks.

### Linting

[TSLint](https://github.com/palantir/tslint) is the most popular TypeScript linting tool.

### Code Formatting

[Prettier](https://github.com/prettier/prettier) is used to format code (all types of files) in an opinionated way.

### Semantic Commit Messages

Commitlint is a library that validates commit messages to ensure they follow [semantic commit messages](https://seesparkbox.com/foundry/semantic_commit_messages).

### Git Hooks

[Husky](https://github.com/typicode/husky) is a library to ease the application of git hooks.

## [Changelog](CHANGELOG.md)

## License

[MIT](LICENSE)
