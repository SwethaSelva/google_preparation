var eventualSafeNodes = function(graph) {
  let terminalNodes = [];
  let visitedNodes = new Array(graph.length).fill(0);

  function dfs (node) {
    // Base case
    if (visitedNodes[node] === 1) return false;
    if (visitedNodes[node] === 2) return true;

    visitedNodes[node] = 1;
    // Visiting the neighbours
    for (let neigh of graph[node]) {
      if(!dfs(neigh)) return false;
    }
    visitedNodes[node] = 2;
    return true;
  }

  for (let i = 0; i < graph.length; i++) {
    if (dfs(i)) terminalNodes.push(i);
  }
  return terminalNodes;
};

console.log(eventualSafeNodes([[1, 2], [2, 3], [5], [0], [5], [], []]));
console.log(eventualSafeNodes([[1, 2, 3, 4], [1, 2], [3, 4], [0, 4], []]));
console.log(eventualSafeNodes([[1, 2, 3, 4], [2, 4], [0, 3, 4], [2], []]));