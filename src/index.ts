import fs from 'fs';
import path from 'path';

function bufferToJson<T>(buffer: Buffer): T {
  return JSON.parse(buffer.toString());
}

function formatJson(json: object): string {
  return JSON.stringify(json, null, 2);
}

function setup(process: NodeJS.Process) {
  const cwd = process.cwd();

  try {
    const pathToPkg = path.join(cwd, 'package.json');
    const file = fs.readFileSync(pathToPkg);
    const packageJson = bufferToJson<IPackageJson>(file);

    const scripts = {
      lint: 'tslint --fix -p . -c tslint.json'
    };

    if (packageJson.scripts) {
      packageJson.scripts.lint = scripts.lint;
    } else {
      packageJson.scripts = {
        lint: scripts.lint
      };
    }

    packageJson.husky = {
      hooks: {
        'pre-commit': 'yarn lint && pretty-quick --staged',
        'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS'
      }
    };

    packageJson.prettier = {
      tabWidth: 2,
      semi: true,
      singleQuote: true
    };

    packageJson.commitlint = {
      extends: ['@commitlint/config-conventional']
    };

    const tslintConfig = {
      extends: ['tslint:latest', 'tslint-config-prettier']
    };

    const tsconfig = {
      compilerOptions: {
        declaration: true,
        esModuleInterop: true,
        lib: ['esnext'],
        module: 'commonjs',
        moduleResolution: 'node',
        outDir: 'lib',
        removeComments: true,
        strict: true
      },
      include: ['src']
    };

    fs.writeFileSync(path.join(cwd, 'tslint.json'), formatJson(tslintConfig));
    fs.writeFileSync(path.join(cwd, 'tsconfig.json'), formatJson(tsconfig));
    fs.writeFileSync(pathToPkg, formatJson(packageJson));
  } catch (error) {
    process.stdout.write(`${error}\n`);
    process.exit(1);
  }
}

interface IPackageJson {
  scripts?: { lint: string };
  husky: object;
  prettier: object;
  commitlint: object;
}

export { setup, bufferToJson, formatJson };
