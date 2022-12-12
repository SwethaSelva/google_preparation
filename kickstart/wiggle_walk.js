let solutionRuner = require('./setup');

function solution() {
  let [No_of_Inst, R, C, SR, SC] = readline().split(' ').map(x => parseInt(x));
  let instructionArr = readline().split('');

  let direction = {
    N: [-1, 0], S: [1, 0],
    E: [0, 1], W: [0, -1]
  };
  let seen = {[`${SR}${SC}`]: 1};
  let curRow = SR;
  let curCol = SC;

  for (let i = 0; i < No_of_Inst; i++) {
    while (1) {
      curRow += direction[instructionArr[i]][0];
      curCol += direction[instructionArr[i]][1];
      if (!seen[`${curRow}${curCol}`]) {
        seen[`${curRow}${curCol}`] = true;
        break;
      }
    }
  }

  // Print the result onto the standard output.
  process.stdout.write(`${curRow}  ${curCol}\n`);
}

solutionRuner(solution);