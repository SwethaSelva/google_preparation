function validTree(n, edges) {
  if (!n) return true;

  let graph = new Array(n).fill(0).map(_ => []);
  let inDegree = new Array(n).fill(0);

  for (let i = 0; i < edges.length; i++) {
    let [v1, v2] = edges[i];

    graph[v1].push(v2);
    inDegree[v2] += 1;
  }

  let q = [];
  for (let i = 0; i < inDegree.length; i++) {
    if (!inDegree[i]) q.push(i);
  }

  if (!q.length) return
  while (q.length) {
    let ver = q.shift();

    for (let adjVer of graph[ver]) {
      inDegree[adjVer] -= 1;
      if (!inDegree[adjVer]) q.push(adjVer);
    }
  }

  return inDegree.every(Boolean);
}

console.log(validTree(5, [[0, 1], [0, 2], [0, 3], [1, 4]]))