import fs from 'fs';
import path from 'path';

function setup(process: NodeJS.Process) {
  const cwd = process.cwd();

  function bufferToJson<T>(buffer: Buffer): T {
    return JSON.parse(buffer.toString());
  }

  function formatJson(json: object): string {
    return JSON.stringify(json, null, 2);
  }

  try {
    const pathToFile = path.join(cwd, 'package.json');
    const file = fs.readFileSync(pathToFile);
    const packageJson = bufferToJson<IPackageJson>(file);

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

    if (packageJson.scripts) {
      packageJson.scripts.lint = 'tslint --fix -p . -c tslint.json';
    } else {
      packageJson.scripts = {
        lint: 'tslint --fix -p . -c tslint.json'
      };
    }

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
    fs.writeFileSync(path.join(cwd, 'tsconfg.json'), formatJson(tsconfig));
    fs.writeFileSync(pathToFile, formatJson(packageJson));
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

export { setup };
