/**
 * Graph like data structure
 */

class Union {
  constructor(size = 0) {
    this.union = [];
    for (let i = 0; i < size; i++) this.union.push(i);
  }
  outOfBoundary(vertex) {
    return vertex >= this.union.length || vertex < 0;
  }
  isConnected (vertex1, vertex2) {
    if (this.outOfBoundary(vertex1) || this.outOfBoundary(vertex2)) return 'Invalid vertex';
    
    return this.union[vertex1] === this.union[vertex2];
  }
  unionBothVertex(vertex1, vertex2) {
    if (!this.isConnected(vertex1, vertex2)) {
      let firstVertexVal = this.union[vertex1];
      for (let i = 0; i < this.union.length; i++) {
        if (this.union[i] === firstVertexVal) this.union[i] = vertex2;
      }
    }
    return this.union;
  }
}
