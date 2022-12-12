class Graph {
  constructor () {
    this.adjList = {};
  }
  addVertex(vertex) {
    if (!this.adjList[vertex]) this.adjList[vertex] = new Set();
  }
  isExist (vertex) {
    return this.adjList[vertex];
  }
  isConnected(vertex1, vertex2) {
    return this.adjList[vertex1].has(vertex2) && this.adjList[vertex2].has(vertex1);
  }
  connect (vertex1, vertex2) {
    this.addVertex(vertex1);
    this.addVertex(vertex2);

    if (!this.adjList[vertex1].has(vertex2)) this.adjList[vertex1].add(vertex2);
    if (!this.adjList[vertex2].has(vertex1)) this.adjList[vertex2].add(vertex1);

    return this;
  }
  traversal (visited = {}, result = []) {
    for (let vertex in this.adjList) {
      if (visited[vertex]) continue;

      let q = [vertex];
      while (q.length) {
        let curVertex = q.shift();
        if (visited[curVertex]) continue;
        
        visited[curVertex] = true;
        result.push(curVertex);
        q.push(...this.adjList[curVertex]);
      }
      return result;
    }
  }
  /**
   *         (8)    (7)
   *      1------2--------3
   * (4)/ |   (2)| \      | \(9)
   * 0  (11)     8  (4) (14)  4
   * (8)\ |(7)/  |(6)  \  | /(10)
   *      7------6--------5
   *        (1)     (2)
   * 
   * path = {}
   */
}