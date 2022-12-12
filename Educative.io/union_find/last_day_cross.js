class UnionFind {
  // Initialise the 1D array
  constructor(n) {
    this.parents = new Array();
    for (let i = 0; i < n; i++) {
      this.parents.push(i);
    }
  }

  // Find parent of an index
  find(x) {
    if (this.parents[x] != x) {
      this.parents[x] = this.find(this.parents[x]);
    }
    return this.parents[x];
  }

  // Connecting two cells
  union(x, y) {
    this.parents[this.find(x)] = this.find(y);
  }

  // Mapping 2D array to 1D array to perform union find operations
  findIndex(x, y, col) {
    // +1 because starting from index 0
    return x * col + (y + 1);
  }
}

let lastDayToCross = function(row, col, cells) {
  let connections = new UnionFind(row * col + 2);
  let neighbours = [
    [0, -1],
    [0, 1],
    [-1, 0],
    [1, 0],
  ];

  for (let i = 0; i < cells.length; i++) {
    cells[i] = [cells[i][0] - 1, cells[i][1] - 1];
  }

  let grid = new Array(row);
  for (let x = 0; x < row; x++) {
    grid[x] = new Array(col).fill(1);
  }

  // Start backtracking from last cell in cells
  for (let i = cells.length - 1; i > -1; i--) {
    let r = cells[i][0];
    let c = cells[i][1];
    grid[r][c] = 0;

    neighbours.forEach((x) => {
      let r_neigh = x[0];
      let c_neigh = x[1];

      let first_ind = connections.findIndex(r + r_neigh, c + c_neigh, col);
      // Verify that traversing is within the limits of the grid
      if (
        r + r_neigh >= 0 &&
        r + r_neigh < row &&
        c + c_neigh >= 0 &&
        c + c_neigh < col &&
        grid[r + r_neigh][c + c_neigh] == 0
      ) {
        let second_ind = connections.findIndex(r, c, col);
        connections.union(first_ind, second_ind);
      }
    });

    if (r == 0) {
      connections.union(0, connections.findIndex(r, c, col));
    }

    if (r == row - 1) {
      let rr = row * col + 1;
      let cc = connections.findIndex(r, c, col);
      connections.union(rr, cc); // last index and current index
    }

    let f1 = connections.find(0);
    let f2 = connections.find(row * col + 1);
    if (f1 == f2) {
      return i;
    }
  }
}

console.log(lastDayToCross(2 , 2 , [[1,1],[1,2],[2,1],[2,2]]));
console.log(lastDayToCross(2 , 2 , [[1,1],[2,1],[1,2],[2,2]]));
console.log(lastDayToCross(5 , 5 , [[1,1],[2,1],[3,1],[4,1],[5,1],[1,2],[2,2],[3,2],[4,2],[5,2],[1,3],[2,3],[3,3],[4,3],[5,3],[1,4],[2,4],[3,4],[4,4],[5,4],[1,5],[2,5],[3,5],[4,5],[5,5]]));
console.log(lastDayToCross(3 , 3 , [[1,2],[2,1],[3,3],[2,2],[1,1],[1,3],[2,3],[3,2],[3,1]]));
console.log(lastDayToCross(3 , 4 , [[2,4],[1,3],[3,3],[2,1],[2,3],[2,2],[1,4],[3,1],[1,1],[1,2],[3,2],[3,4]]));