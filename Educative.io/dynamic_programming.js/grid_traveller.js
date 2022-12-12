function gridTraveller (n, m, row = 0, col = 0) {
  if (row + 1 === n) gridTraveller(n, m, row + 1, col);
  if (col) gridTraveller(n, m, row, col + 1);
}