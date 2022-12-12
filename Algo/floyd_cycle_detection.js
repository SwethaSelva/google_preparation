function buildAdjList(graphEdges) {
  let adjList = {};
  for (let [vertex1, vertex2] of graphEdges) {
    if (!adjList[vertex1]) adjList[vertex1] = {};
    adjList[vertex1].push(vertex2);
  }
}
function floydCycleDetection (graph) {
  let adjList = buildAdjList(graph);

  let slowPointer = graph[vertex1]
}

floydCycleDetection([[0,1],[0,7],[1,2],[2,8],[2,3],[2,5],[3,5],[3,4],[4,5],[5,6],[6,7],[7,0], [8,7], [8,6], [7,1]]);