class UnionFind {
  constructor (arrLength) {
    this.parent = new Array(arrLength+1);
    for (let i = 0; i < this.parent.length; i++) this.parent[i] = i;
    this.rank = new Array(arrLength+1).fill(1);
  }
  findParent(node) {
    if (node === this.parent[node]) return node;
    return this.findParent(this.parent[node]);
  }
  union(node1, node2) {
    let node1Parent = this.findParent(node1);
    let node2Parent = this.findParent(node2);
    if (node1Parent === node2Parent) return false;
    if (this.rank[node1Parent] >= this.rank[node2Parent]) {
      this.parent[node2Parent] = node1Parent;
      this.rank[node1Parent] += 1;
    } else {
      this.parent[node1Parent] = node2Parent;
      this.rank[node2Parent] += 1;
    }
    return true;
  }
}
function redundantConnection(edges){
  let unionFind = new UnionFind(edges.length);
  for (const edge of edges) {
    if (!unionFind.union(edge[0], edge[1])) return edge;
  }
  return [];
}

console.log(redundantConnection([[1,2],[1,3],[2,3]])); // [2,3]
console.log(redundantConnection([[1,2],[2,3],[1,3]])); // [1,3]
console.log(redundantConnection([[1,2],[2,3],[3,4],[1,4],[1,5]])); // [1,4]
console.log(redundantConnection([[1,2],[1,3],[1,4],[2,3]])); // [2,3]
console.log(redundantConnection([[1,2],[1,3],[1,4],[1,5],[2,5]])); // [2,5]
