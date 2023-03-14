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

class UnionFind {
  constructor (length) {
    this.parent = new Array(length).fill(-1);
    this.rank = new Array(length).fill(0);
  }
  findParent (v) {
    if (this.parent[v] === -1) {
      this.parent[v] = v;
      this.rank[v] = 1;
    }
    if (v === this.parent[v]) return v;
    return this.findParent(this.parent[v]);
  }

  union (v1, v2, curV) {
    let parent1 = this.findParent(v1);
    let parent2 = this.findParent(v2);

    let curParent = parent1;
    if (this.rank[parent2] > this.rank[parent1]) {
      this.parent[parent1] = parent2;
      this.rank[parent2] += 1;
      curParent = parent2;
    } else {
      this.parent[parent2] = parent1;
      this.rank[parent1] += 1;
    }

    this.parent[curV] = curParent;
    this.rank[curParent] += 1;
    return true;
  }
}
function convert2Dto1DIdx (row, col, noOfCol) {
  return row * noOfCol + col;
}
function numIslands(grid){
  let unionFind = new UnionFind(grid.length * grid[0].length);
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      // Current
      if (grid[row][col] === '0') continue;
      let cur1DIdx = convert2Dto1DIdx(row, col, grid[0].length);

      let leftParent = cur1DIdx;
      let upParent = cur1DIdx;
      // Left
      if (+grid[row][col-1]) {
        let leftIdx = convert2Dto1DIdx(row, col - 1, grid[0].length);
        leftParent = unionFind.findParent(leftIdx);
      }
      
      // Up
      if (grid[row-1] && +grid[row-1][col]) {
        let upIdx = convert2Dto1DIdx(row-1, col, grid[0].length);
        upParent = unionFind.findParent(upIdx);
      }
      unionFind.union(leftParent, upParent, cur1DIdx);
    }
  }
  let count = 0;
  let parentTracker = {};
  console.log(unionFind.parent)
  for (let i = 0; i < unionFind.parent.length; i++) {
    if (unionFind.parent[i] === -1) continue;

    let parent = unionFind.findParent(unionFind.parent[i]);
    if (parent !== unionFind.parent[i]) unionFind.union(parent, unionFind.parent[i], parent);
    if (!parentTracker[parent]) count++;
    parentTracker[parent] = 1;
  }
  console.log({ parentTracker })
  return count;
}

console.log(numIslands([["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]])); // 1
console.log(numIslands([["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]])); // 3
console.log(numIslands([["1","1","1"],["0","1","0"],["0","1","1"]])); // 1
console.log(numIslands([["1","0","1","1","1"],["1","0","1","0","1"],["1","1","1","0","1"]])); // 1
console.log(numIslands(
  [
    ["1","1","1","1","1","0","1","1","1","1"],
    ["1","0","1","0","1","1","1","1","1","1"],
    ["0","1","1","1","0","1","1","1","1","1"],
    ["1","1","0","1","1","0","0","0","0","1"],
    ["1","0","1","0","1","0","0","1","0","1"],
    ["1","0","0","1","1","1","0","1","0","0"],
    ["0","0","1","0","0","1","1","1","1","0"],
    ["1","0","1","1","1","0","0","1","1","1"],
    ["1","1","1","1","1","1","1","1","0","1"],
    ["1","0","1","1","1","1","1","1","1","0"]]
)); // 2