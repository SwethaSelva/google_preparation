class QuickUnion {
  constructor(size = 0) {
    this.union = [];
    for (let i = 0; i < size; i++) this.union.push(i);
  }
  outOfBoundary(vertex) {
    return vertex >= this.union.length || vertex < 0;
  }
  root (vertex) {
    while (vertex !== this.union[vertex]) vertex = this.union[vertex];
    return vertex;
  }
  isConnected (vertex1, vertex2) {
    if (this.outOfBoundary(vertex1) || this.outOfBoundary(vertex2)) return 'Invalid Vertex';
    return this.root(vertex1) === this.root(vertex2);
    // let parentIdx1 = vertex1;
    // let parentIdx2 = vertex2;
    // while (this.union[parentIdx1] !== parentIdx1  || this.union[parentIdx2] !== parentIdx2) {
    //   if (parentIdx1 === this.union[parentIdx2] || parentIdx2 === this.union[parentIdx1]) return true;
    //   parentIdx1 = this.union[parentIdx1];
    //   parentIdx2 = this.union[parentIdx2];
    // }
    // return true;
  }
  unitedVertex(parentIdx, childIdx) {
    if (this.outOfBoundary(parentIdx) || this.outOfBoundary(childIdx)) return 'Invalid Vertex';
    if (this.isConnected(parentIdx, childIdx)) return true;

    while (this.union[parentIdx] !== parentIdx) parentIdx = this.union[parentIdx];
    this.union[parentIdx] = childIdx;
    return true;
  }
}

/**
 *            init   connect  isConnected
 * union        N      N          1
 * quick-union  N     N(inc)      N 
 */