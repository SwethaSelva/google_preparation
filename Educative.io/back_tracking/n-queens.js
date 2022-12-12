function isValid (curPath, curPosition, curQueen) {
  for (let i = 0; i < curPath.length; i++) {
    if (
      curPath[i] === curPosition
      || curQueen - i + curPath[i] === curPosition
      || curPath[i] - Math.abs(i - curQueen) === curPosition
    ) return false;
  }
  return true;
}

function solveNQueens(n, curQueen = 0, result = [], curPath = []) {
  if (curQueen === n) {
    result.push(curPath);
    return result.length;
  }

  for (let i = 0; i < n; i++) {
    if (!isValid(curPath, i, curQueen)) continue;
    solveNQueens(n, curQueen + 1, result, [...curPath, i]);
  }
  return result.length;
}

console.log(solveNQueens(3)); // 0
console.log(solveNQueens(4)); // 2
console.log(solveNQueens(5)); // 10
console.log(solveNQueens(6)); // 4
console.log(solveNQueens(8)); // 92
console.log(solveNQueens(10)); // 724