// class TicTacToe {
//   // Constructor will be used to initialize TicTacToe data members 
//   constructor(n) {
//     this.board = [];
//     for (let i = 0; i < n; i++) {
//       this.board.push(new Array(n).fill(0));
//     }
//     this.winner = 0;
//   }

//   // move will be used to play a move by a specific player and identify who
//   // wins at each move
//   move(row, col, player) {
//     if (this.winner) return this.winner;
//     this.board[row][col] = player;

//     // Row check
//     let i = 0;
//     for (; i < this.board.length; i++) {
//       if (this.board[i][col] !== player) break;
//     }
//     if (i === this.board.length) return this.winner = player;

//     // Col check
//     i = 0;
//     for (; i < this.board.length; i++) {
//       if (this.board[row][i] !== player) break;
//     }
//     if (i === this.board.length) return this.winner = player;

//     // Diagonal check
//     if (row === col) {
//       i = 0;
//       for (;i < this.board.length; i++) {
//         if (this.board[i][i] !== player) break;
//       }
//       if (i === this.board.length) return this.winner = player;
//     }

//     // Anti-diagonal check
//     if (row + col + 1 === this.board.length) {
//       i = 0;
//       for (;i < this.board.length; i++) {
//         let curColIdx = Math.abs(i - this.board.length);
//         if (this.board[i][curColIdx] !== player) break;
//       }
//       if (i === this.board.length) return this.winner = player;
//     }
//     return this.winner;
//   }
// }

class TicTacToe {
  // Constructor will be used to initialize TicTacToe data members 
  constructor(n) {
      this.rows = Array(n).fill(0);
      this.cols = Array(n).fill(0);
      this.diagonal = 0;
      this.antiDiagonal = 0;
      this.winner = 0;
  }

  // move will be used to play a move by a specific player and identify who
  // wins at each move
  move(row, col, player) {
    if (this.winner) return this.winner;
    let multipler = 1;
    if (player === 2) multipler *= this.rows.length;

    this.rows[row] += multipler;
    if (this.rows[row] / multipler === this.rows.length) return player;
    this.cols[col] += multipler;
    if (this.cols[col] / multipler === this.rows.length) return player;
    if (row === col) {
      this.diagonal += multipler;
      if (this.diagonal / multipler === this.rows.length)  return player;
    }
    if (row + col + 1 === this.rows.length) {
      this.antiDiagonal += multipler;
      if (this.antiDiagonal / multipler === this.rows.length)  return player;
    }

    // your code will replace this placeholder return statement
    return 0
  }
}

function functionGenerator(optArr, valArr) {
  let ticTacToe = new TicTacToe(...valArr[0]);
console.log('-------------------------------------------------')
  for (let i = 1; i < optArr.length; i++) {
    console.log(ticTacToe[optArr[i]](...valArr[i]));
  }
}

functionGenerator(["TicTacToe","move","move","move","move","move","move","move"], [[3],[0,0,1],[0,2,2],[2,2,1],[1,1,2],[2,0,1],[1,0,2],[2,1,1]]);
functionGenerator(["TicTacToe","move","move","move","move","move","move","move","move","move","move","move"], [[5],[4,4,2],[0,0,1],[2,2,2],[4,0,1],[0,4,2],[2,1,1],[2,4,2],[1,0,1],[1,4,2],[2,0,1],[3,4,2]]);
functionGenerator(["TicTacToe","move","move","move","move","move","move","move"], [[3],[0,2,2],[0,0,1],[1,1,2],[2,0,1],[1,0,2],[2,2,1],[1,2,2]]);
functionGenerator(["TicTacToe","move","move","move","move","move","move","move","move","move","move","move","move"], [[4],[0,1,1],[1,2,2],[2,1,1],[3,2,2],[2,2,1],[2,3,2],[2,0,1],[0,3,2],[1,1,1],[3,3,2],[3,0,1],[1,3,2]]);
functionGenerator(["TicTacToe","move","move","move","move","move","move","move","move","move"], [[3],[1,1,2],[0,0,1],[0,1,2],[2,1,1],[1,0,2],[1,2,1],[0,2,2],[2,0,1],[2,2,2]]);