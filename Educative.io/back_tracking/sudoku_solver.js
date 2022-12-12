const DIGITS = ['1', '2', '3', '4', '5', '6', '7', '8', '9' ];
   
function isValid (row, col, boxNum, num, hash) {
  // console.log({ boxNum })
  let passedCondt = !hash.row[row][num] 
    && !hash.col[col][num]
    && !hash.box[boxNum][num];
  if (passedCondt) modifyHash(row, col, boxNum, num, hash, true);
  return passedCondt;
}

function modifyHash (row, col, boxNum, num, hash, val = false) {
  hash.row[row][num] = !!val;
  hash.col[col][num] = !!val;
  hash.box[boxNum][num] = !!val;
}

function solveSudoku(board){
  let boardHash = { row: {}, col: {}, box: {} };

  for (let i = 0; i < board.length; i++) {
    boardHash.row[i] = new Array(10).fill(false);
    for (let j = 0; j < board[i].length; j++) {
      if (!boardHash.col[j]) boardHash.col[j] = new Array(10).fill(false);

      let boxNum = Math.floor(i/3) + 3 * Math.floor(j/3);
      if (!boardHash.box[boxNum]) boardHash.box[boxNum] = new Array(10).fill(false);
      
      if (board[i][j] === '.') continue;
      boardHash.row[i][board[i][j]] = true;
      boardHash.col[j][board[i][j]] = true;
      boardHash.box[boxNum][board[i][j]] = true;
    }
  }

  backtracking();
  return board;
  function backtracking (row = 0, col = 0) {
    if (col > board.length - 1) [row, col] = [row + 1, 0];
    if (row > board.length - 1) return true;
    if (board[row][col] !== '.') return backtracking(row, col + 1);

    for (const digit of DIGITS) {
      let boxNum =  Math.floor(row/3) + 3 * Math.floor(col/3);
      if (!isValid(row, col, boxNum, digit, boardHash)) continue;
      board[row][col] = digit;
      let isFulFilled = backtracking(row, col + 1);
      if (isFulFilled) return isFulFilled;
      board[row][col] = '.';
      modifyHash(row, col, boxNum, digit, boardHash);
    }
    return false;
  }
};

// console.log(solveSudoku([[".",".",".",".",".",".",".","7","."],["2","7","5",".",".",".","3","1","4"],[".",".",".",".","2","7",".","5","."],["9","8",".",".",".",".",".","3","1"],[".","3","1","8",".","4",".",".","."],[".",".",".","1",".",".","8",".","5"],["7",".","6","2",".",".","1","8","."],[".","9",".","7",".",".",".",".","."],["4","1",".",".",".","5",".",".","7"]]));
console.log(solveSudoku([[".",".","9","7","4","8",".",".","."],["7",".",".",".",".",".",".",".","."],[".","2",".","1",".","9",".",".","."],[".",".","7",".",".",".","2","4","."],[".","6","4",".","1",".","5","9","."],[".","9","8",".",".",".","3",".","."],[".",".",".","8",".","3",".","2","."],[".",".",".",".",".",".",".",".","6"],[".",".",".","2","7","5","9",".","."]]));
// console.log(solveSudoku([[".",".","6",".",".","4",".",".","."],[".","3",".",".","1",".",".","9","5"],[".",".",".",".",".",".","8",".","."],[".",".",".",".","8",".","3",".","."],["4",".",".",".",".","1",".","8","2"],[".","2",".",".",".",".","7",".","."],[".",".",".",".",".",".",".",".","7"],[".","5",".",".","9",".",".","2","1"],["3",".",".","5",".",".",".",".","."]]));
// console.log(solveSudoku([["6",".",".",".",".",".","1",".","."],[".",".",".","3",".",".",".",".","."],[".","9",".",".","4","7",".","8","."],["9",".",".",".","5","3",".",".","6"],[".",".",".","2",".",".",".","5","."],[".","3",".","8",".",".",".",".","."],[".","7",".",".","9","5",".","4","."],[".",".","4",".",".",".",".",".","8"],[".",".",".",".","2",".",".",".","."]]));
// console.log(solveSudoku([[".",".",".",".",".",".","7",".","."],[".","4",".",".","3",".",".","6","5"],[".",".","1",".",".","8",".",".","."],[".","6",".",".","5",".",".","3","9"],["4",".",".","6",".",".",".",".","."],[".",".",".",".",".",".",".","2","."],["8",".",".",".",".","3",".","9","7"],[".",".",".",".","7",".","4",".","."],[".","9",".",".",".",".","2",".","."]]));
// console.log(solveSudoku([["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]));