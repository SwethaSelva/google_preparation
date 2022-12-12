/**
 * Negative cycle can't have minimum weight path
 * because it will always be less if you had just gone around that cycle one more time.
 * This can detect the negative cycle.
 */

function findShortestPath(graph, src, desc) {
  let distance = {};
  let prevVertex = {};
  for (let [vertex1, vertex2] of graph) {
    if (!distance[vertex1]) {
      distance[vertex1] = Infinity;
      prevVertex[vertex2] = null;
    } 
    if (!distance[vertex2]) {
      distance[vertex2] = Infinity;
      prevVertex[vertex2] = null;
    }
  }
  distance[src] = 0;
  prevVertex[src] = src;
  for (let _ in distance) {
    for (let [vertex1, vertex2, weight] of graph) {
      if (distance[vertex2] > weight + distance[vertex1]) {
        distance[vertex2] = weight + distance[vertex1];
        prevVertex[vertex2] = vertex1;
      }
    }
  }
  for (let [vertex1, vertex2, weight] of graph) {
    if (distance[vertex2] > weight + distance[vertex1]) {
      return 'Detected Negative Weighted Cycle';
    }
  }
  let path = [desc];
  let curVertex = desc
  while (curVertex !== src) {
    curVertex = prevVertex[curVertex];
    path.unshift(curVertex);
  }
  return path;
}

let graph = [
  ['C', 'D', -4],
  ['B', 'C', 2],
  ['B', 'D', 1],
  // ['D', 'B', 1],
  ['A', 'B', 2],
  ['D', 'E', 3]
];

console.log(findShortestPath(graph, 'A', 'E'));