#!/usr/bin/env node
const { setup } = require('./lib');

(async () => {
  try {
    setup(process);
  } catch (error) {
    process.stdout.write(`${error}\n`);
  }
})();
