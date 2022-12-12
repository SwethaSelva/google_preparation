class Group {
  constructor () {
    this.rank = {};
    this.parent = {};
  }
  insert (node) {
    this.parent[node] = node;
    this.rank[node] = 1;
    return node;
  }
  findParent (node) {
    if (!this.parent[node]) return this.insert(node);
    if (this.parent[node] === node) return node;
    return this.findParent(this.parent[node]);
  }
  union (node1, node2, curNode) {
    let parent1 = this.findParent(node1);
    let parent2 = this.findParent(node2);

    if (parent1 === parent2) {
      this.parent[curNode] = parent1;
      if (curNode !== parent1) delete this.rank[curNode];
      return true;
    }
    let curParent = parent1;
    if (this.rank[parent1] >= this.rank[parent2]) {
      this.parent[parent2] = parent1;
      this.rank[parent1] += 1;
      delete this.rank[parent2];
    } else {
      this.parent[parent1] = parent2;
      curParent = parent2;
      this.rank[parent1] += 1;
      delete this.rank[parent1];
    }
    this.parent[curNode] = curParent;
    if (curNode !== curParent) delete this.rank[curNode];
  }
}

function isLandAndBoundaryValid (grid, row, col) {
  return row >= 0 && row < grid.length && col >= 0 && col < grid[row].length && grid[row][col] === '1';
}

function numIslands(grid){
  const group = new Group();
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] !== '1') continue;

      let curNode = `${row}-${col}`;
      group.insert(curNode);
      let isNodeUpValid = isLandAndBoundaryValid(grid, row - 1, col);
      let isNodeDownValid = isLandAndBoundaryValid(grid, row, col - 1);
      if (!isNodeUpValid && !isNodeDownValid) continue;

      let nodeUp = `${row-1}-${col}`;
      let nodeDown = isNodeDownValid? `${row}-${col-1}`: curNode;
      if (!isNodeUpValid) [nodeUp, nodeDown] = [nodeDown, curNode];
      group.union(nodeUp, nodeDown, curNode);
    }
  }
  return Object.keys(group.rank).length;
}

console.log(numIslands([["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]])); // 1
console.log(numIslands([["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]])); // 3
console.log(numIslands([["1","1","1"],["0","1","0"],["0","1","1"]])); // 1
console.log(numIslands([["1","0","1","1","1"],["1","0","1","0","1"],["1","1","1","0","1"]])); // 1