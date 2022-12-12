class Node {
  constructor(weight, vertex) {
    this.weight = weight;
    this.vertex = vertex;
  }
}
class PriorityQueue {
  constructor () {
    this.values = []
  }
  enqueue(value, priority) {
    this.values.push({ value, priority });
    this.sort();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
  dequeue() {
    return this.values.shift();
  }
}
class WeightedGraph {
  constructor () {
    this.adjList = {};
  }
  addVertex (vertex1) {
    if (!this.adjList[vertex1]) this.adjList[vertex1] = [];
  }
  addEdge(vertex1, vertex2, weight) {
    this.addVertex(vertex1);
    this.addVertex(vertex2);

    let vertex1Node = new Node(weight, vertex1);
    let vertex2Node = new Node(weight, vertex2);
    
    let isAlreadyExist = false;
    for (let i = 0; i < this.adjList[vertex1].length; i++) {
      let child = this.adjList[vertex1][i];
      if (child === vertex2) {
        isAlreadyExist = true;
        this.adjList[vertex1][i].weight = weight;
        break;
      }
    }
    if (!isAlreadyExist) this.adjList[vertex1].push(vertex2Node);
    isAlreadyExist = false;
    for (let i = 0; i < this.adjList[vertex2].length; i++) {
      let child = this.adjList[vertex2][i];
      if (child === vertex1) {
        isAlreadyExist = true;
        this.adjList[vertex2][i].weight = weight;
        break;
      }
    }
    if (!isAlreadyExist) this.adjList[vertex2].push(vertex1Node);
  }
  createPath(vertex1, vertex2, prevVertex) {
    let path = [vertex2];
    let curVertex = vertex2;
    while (curVertex !== vertex1) {
      curVertex = prevVertex[curVertex];
      path.unshift(curVertex);
    }
    return path;
  }
  findShortestPathDijkstra (vertex1, vertex2) {
    let prevVertex = {};
    let distance = {};
    for (let vertex in this.adjList) {
      distance[vertex] = Infinity;
      prevVertex[vertex] = null;
      if (vertex == vertex1) {
        distance[vertex] = 0;
        prevVertex[vertex] = vertex;
      }
    }
    let queue = [vertex1];
    while (queue.length) {
      let curVertex = queue.shift();
      for (let neigh of this.adjList[curVertex]) {
        if (neigh.weight + distance[curVertex] < distance[neigh.vertex]) {
          queue.push(neigh.vertex);
          distance[neigh.vertex] = neigh.weight + distance[curVertex]
          prevVertex[neigh.vertex] = curVertex;
        }
      }
    }
    return this.createPath(vertex1, vertex2, prevVertex);
  }
  findShortestPathDijkstraWithBHeap (vertex1, vertex2) {
    let prevVertex = {};
    let distance = {};
    let path = [];
    let nodes = new PriorityQueue();
    for (let vertex in this.adjList) {
      distance[vertex] = Infinity;
      prevVertex[vertex] = null;
      if (vertex == vertex1) distance[vertex] = 0;
      nodes.enqueue(vertex, distance[vertex]);
    }
    while (nodes.values.length) {
      let curVertex = nodes.dequeue().value;
      if (curVertex === vertex2) {
        while(prevVertex[curVertex]) {
          path.unshift(curVertex);
          curVertex = prevVertex[curVertex];
        }
        path.unshift(vertex1);
        return path;
      }
      for (let neigh of this.adjList[curVertex]) {
        if (neigh.weight + distance[curVertex] < distance[neigh.vertex]) {
          distance[neigh.vertex] = neigh.weight + distance[curVertex]
          nodes.enqueue(neigh.vertex, distance[neigh.vertex]);
          prevVertex[neigh.vertex] = curVertex;
        }
      }
    }
  }
  /**
   * It can't handle negative cycle graph
   * Blind search - consume lot of time
   * Complexity| Normal  | With Heap
   * ----------------------------------
   *    Time   |  O(V^2) |   O(E log V)
   *    Space  |  O(V)   |   O(V)
   */
}

let wg = new WeightedGraph();
wg.addEdge(0,1,4);
wg.addEdge(0,7,8);
wg.addEdge(1,2,8);
wg.addEdge(7,8,7);
wg.addEdge(7,6,1);
wg.addEdge(2,3,7);
wg.addEdge(2,5,4);
wg.addEdge(2,8,2);
wg.addEdge(8,6,6);
wg.addEdge(1,7,11);
wg.addEdge(6,5,2);
wg.addEdge(3,4,9);
wg.addEdge(3,5,14);
wg.addEdge(5,4,10);
console.log(wg.findShortestPathDijkstra(0,4));
console.log(wg.findShortestPathDijkstraWithBHeap(0,4));

console.log(JSON.stringify(wg))