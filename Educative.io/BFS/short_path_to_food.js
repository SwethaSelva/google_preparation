const DIRS = [[1,0], [0,1],[-1,0],[0,-1]];
/**
 * * - starting point
 * X - obstacle
 * O - free path
 */
function shortestPath (grid) {
  let q = [];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '*') {
        q.push([i, j, 1]);
        break;
      }
    }
  }

  let result = Infinity;
  while (q.length) {
    let [row, col, count] = q.shift();

    for (let dir of DIRS) {
      let adjRow = row + dir[0];
      let adjCol = col + dir[1];

      if (
        (adjRow < 0 || adjRow >= grid.length)
        || (adjCol < 0 || adjCol >= grid[0].length)
      ) continue;
      if (grid[adjRow][adjCol] != 'O') {
        if (grid[adjRow][adjCol] === '#') result = Math.min(count, result);
        continue;
      };

      grid[adjRow][adjCol] = 'X';
      q.push([adjRow, adjCol, count + 1]);
    }
  }
  return result === Infinity? -1: result;
}
console.log(shortestPath([["X","X","X","X","X","X"],["X","*","O","O","O","X"],["X","O","O","#","O","X"],["X","X","X","X","X","X"]]))
// 3
console.log(shortestPath([["X","X","X","X","X"],["X","*","X","O","X"],["X","O","X","#","X"],["X","X","X","X","X"]]))
// -1
console.log(shortestPath([["X","X","X","X","X","X","X","X"],["X","*","O","X","O","#","O","X"],["X","O","O","X","O","O","X","X"],["X","O","O","O","O","#","O","X"],["X","X","X","X","X","X","X","X"]]))
//6
console.log(shortestPath([["O","*"],["#","O"]])); // 2
console.log(shortestPath([["X","*"],["#","X"]])); // -1