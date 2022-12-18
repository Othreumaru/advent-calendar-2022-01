const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});
const lines = [];

rl.on('line', (line) => {
  lines.push(line);
});

rl.once('close', () => {
  const answer = lines
    .reduce((acc, line) => {
      if (line.length === 0) {
        acc.push(0);
      } else {
        acc[acc.length - 1] += +line;
      }
      return acc;
    }, [])
    .reduce((a, b) => Math.max(a, b));
  console.log(answer);
});
