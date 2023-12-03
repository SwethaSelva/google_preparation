/**
 * Given n nodes labeled from 0 to n - 1 and a list of undirected edges
 (each edge is a pair of nodes), write a function to find the
 number of connected components in an undirected graph.

  Example 1:
    0          3
    |          |
    1 --- 2    4
  Given n = 5 and edges = [[0, 1], [1, 2], [3, 4]], return 2.
 */
class UnionFind {
  constructor(len) {
    this.parent = Array.from(new Array(len).keys());
    this.groups = len;
  }
  findParent(idx) {
    if (this.parent[idx] === idx) return idx;

    return this.findParent(this.parent[idx]);
  }
  union(idx1, idx2) {
    let parent1 = this.findParent(idx1);
    let parent2 = this.findParent(idx2);

    if (parent1 === parent2) return this.groups;

    this.groups--;
    this.parent[parent2] = parent1;

    return this.groups;
  }
}
function numberOfConnectedComponents(n, connections) {
  let uf = new UnionFind(n);
  let result = [];

  for (let i = 0; i < connections.length; i++) {
    result.push(uf.union(...connections[i]));
  }
  return result;
}