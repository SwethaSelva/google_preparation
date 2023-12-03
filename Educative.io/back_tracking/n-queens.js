function isValid (curPath, curCol) {
  let curRow = curPath.length
  for (let row = 0; row < curPath.length; row++) {
    let col = curPath[row];
    let diff = curRow - row;
    if (
      col === curCol
      || col + diff  === curCol
      || col - diff === curCol
    ) return false;
  }
  return true;
}

function solveNQueens(n, result = [], curPath = []) {
  if (curPath.length === n) {
    result.push(curPath);
    return result.length;
  }

  for (let i = 0; i < n; i++) {
    if (!isValid(curPath, i)) continue;
    solveNQueens(n, result, [...curPath, i]);
  }
  return result.length;
}

console.log(solveNQueens(3)); // 0
console.log(solveNQueens(4)); // 2
console.log(solveNQueens(5)); // 10
console.log(solveNQueens(6)); // 4
console.log(solveNQueens(8)); // 92
console.log(solveNQueens(10)); // 724