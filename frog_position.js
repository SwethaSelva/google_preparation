/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} t
 * @param {number} target
 * @return {number}
 */
var frogPosition = function(n, edges, t, target) {
  let adjList = new Array(n + 1).fill(0).map(_ => []);

  for (let i = 0; i < edges.length; i++) {
    let [v1, v2] = edges[i];

    adjList[v1].push(v2);
    adjList[v2].push(v1);
  }

  let visited = new Set();
  return dfs();

  function dfs (curVertex = 1, curProb = 1, depth = 0) {
    let children = adjList[curVertex];

    if (depth === t) {
      if (curVertex === target) return curProb;
      return 0;
    }

    visited.add(curVertex);
    for (let child of children) {
      if (visited.has(child)) continue;

      let prob = dfs (child, curProb * (1 / children.length), depth + 1)
      if (prob) return prob;
    }
    return 0;
  }
};

console.log(frogPosition(7, [[1,2],[1,3],[1,7],[2,6],[2,4],[3,5]], 2, 4)); // 0.16667
// console.log(frogPosition(7, [[1,2],[1,3],[1,7],[2,4],[2,6],[3,5]], 1, 7));
// console.log(frogPosition(7, [[1,2],[1,3],[1,7],[2,4],[2,6],[3,5]], 1, 6));
// console.log(frogPosition(6, [[1,2],[1,3],[2,4],[4,5],[5,6]], 2, 5));
// console.log(frogPosition(6, [[1,2],[1,3],[2,4],[4,5],[5,6]], 4, 5));