function wordSearch(grid, word) {
  let startIdxs = [];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (word[0] === grid[i][j].toLowerCase()) startIdxs.push([i,j]);
    }
  }
  if (!startIdxs.length) return false;

  let visited = {};
  let dirs = [[0, -1], [0, 1], [1, 0], [-1, 0]]
  for (let i = 0; i < startIdxs.length; i++) {
    visited[`${startIdxs[i][0]}-${startIdxs[i][1]}`] = true
    if (backtracking(...startIdxs[i])) return true;
    delete visited[`${startIdxs[i][0]}-${startIdxs[i][1]}`];
  }

  function backtracking(row, col, pos = 1) {
    if (pos === word.length) return true;

    for (let i = 0; i < dirs.length; i++) {
      let curRow = row + dirs[i][0];
      let curCol = col + dirs[i][1];

      // Boundary conditions
      if (visited[`${curRow}-${curCol}`]) continue;
      if (curRow < 0 || curRow >= grid.length || curCol < 0 || curCol >= grid[0].length) continue;
      if (word[pos] !== grid[curRow][curCol].toLowerCase()) continue;

      visited[`${curRow}-${curCol}`] = true;
      if (backtracking(curRow, curCol, pos + 1)) return true;
      delete visited[`${curRow}-${curCol}`];
    }
    return false;
  }
  return false;
}

console.log(wordSearch([
  ['K', 'I', 'C', 'D', 'L', 'J', 'M', 'R'],
  ['V', 'M', 'S', 'P', 'C', 'F', 'A', 'G'],
  ['C', 'A', 'G', 'D', 'J', 'O', 'L', 'O'],
  ['Q', 'Z', 'N', 'T', 'F', 'X', 'C', 'T'],
  ['R', 'L', 'A', 'N', 'I', 'R', 'G', 'D'],
  ['J', 'A', 'W', 'Y', 'M', 'O', 'U', 'A'],
  ['Z', 'A', 'P', 'D', 'R', 'C', 'S', 'D'],
  ['Y', 'V', 'A', 'F', 'P', 'L', 'Z', 'T']
], 'magnanimous'));

console.log(wordSearch([
  ['D', 'O', 'C', 'A', 'L'],
  ['O', 'J', 'N', 'L', 'Z'],
  ['T', 'Z', 'Y', 'L', 'K'],
  ['G', 'Y', 'R', 'O', 'U'],
  ['F', 'K', 'M', 'W', 'P']
], 'callous'));

console.log(wordSearch([
  ["A", "B", "C", "E"],
  ["S", "F", "E", "S"],
  ["A", "D", "E", "E"]
], "ABCESEEEFS"));