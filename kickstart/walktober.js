let solutionRuner = require('./setup');

function solution() {
  let [no_of_parti, no_of_day, parti_ID] = readline().split(' ').map(x => parseInt(x));
  let scoreBoard = []
  for (let i = 0; i < no_of_parti; i++) {
    let participate = readline().split('').map(x => parseInt(x));
    scoreBoard.push(participate);
  }

  let improWalkCount = 0;
  for (let i = 0; i < no_of_day; i++) {
    for (let j = 0; j < no_of_parti; j++) {
      if (j === parti_ID) continue;
      if (scoreBoard[j][i] > scoreBoard[j][parti_ID]) improWalkCount += scoreBoard[j][i] - scoreBoard[j][parti_ID];
    }
  }
  // Print the result onto the standard output.
  process.stdout.write(`${improWalkCount}\n`);
}

solutionRuner(solution);