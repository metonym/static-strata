# static-strata

> Ode to a static type system and tooling for TypeScript.

This project is inspired by Kent C. Dodd's seminal ["Write Tests. Not too many. Mostly integration."](https://kentcdodds.com/blog/write-tests) article in which he emphasizes the benefits of using a static type system and tooling.

While a static type system and tooling will not substitute a solid suite of unit, integration and end-to-end tests, they can alleviate the burden of writing superfluous runtime checks, boosting performance and developer productivity.

## Static Type System

The static type system is [TypeScript](https://www.typescriptlang.org/), a superset of JavaScript.

## Tooling

Static tooling contains a mix of linting, code formatting and enforcing semantic commit messages. These tools are run in automated fashion using git hooks.

### Linting

[TSLint](https://github.com/palantir/tslint) is the most popular TypeScript linting tool.

### Code formatting

[Prettier](https://github.com/prettier/prettier) is used to format code (all types of files) in an opinionated way.

### Semantic commit messages

Commitlint is a library that validates commit messages to ensure they follow [semantic commit messages](https://seesparkbox.com/foundry/semantic_commit_messages).

### Git hooks

[Husky](https://github.com/typicode/husky) is a library to ease the application of git hooks.

## [Changelog](CHANGELOG.md)

## License

[MIT](LICENSE)
