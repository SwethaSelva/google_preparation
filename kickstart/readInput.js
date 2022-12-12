const readline = require('readline');
const { createInterface } = require( 'readline/promises' );
const rl = createInterface(process.stdin, process.stdout);

rl.on('line', line => {
  console.log('line', line);
});