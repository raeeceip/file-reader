// cli.js
const yargs = require('yargs');
const magicFunction = require('./index');

const argv = yargs
  .command('magic', 'Perform magic', {}, (argv) => {
    magicFunction();
  })
  .help().argv;
