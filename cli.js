#!/usr/bin/env node
const { setup } = require('./lib');

(() => {
  try {
    setup(process);
  } catch (error) {
    process.stdout.write(`${error}\n`);
  }
})();
