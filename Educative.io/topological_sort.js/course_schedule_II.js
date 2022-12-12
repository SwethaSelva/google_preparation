function findOrder(n, prerequisites){
  if (!prerequisites.length) return prerequisites.length;
  let graph = {};
  let inDegree = {};
  for (let i = 0; i < n; i++) {
    graph[i] = [];
    inDegree[i] = 0;
  }

  for (let i = 0; i < prerequisites.length; i++) {
    const [dep, main] = prerequisites[i];
    graph[main].push(dep);
    inDegree[dep] += 1;
  }

  let q = [];
  for (let course in inDegree) {
    if (inDegree[course] === 0) q.push(course);
  }

  let result = [];
  while (q.length) {
    let curCourse = q.pop();
    result.push(+curCourse);
    for (let child of graph[curCourse]) {
      inDegree[child] -= 1;
      if (inDegree[child] === 0) q.push(child);
    }
    delete graph[curCourse];
  }
  return Object.keys(graph).length !== 0? []: result;
}

console.log(findOrder(3 , [[1,0],[2,0],[2,1],[1,2]])); // 0
console.log(findOrder(2 , [[1,0]])); // 0,1
console.log(findOrder(7 , [[1, 0], [1, 2], [2, 3], [3, 4], [4, 5]])); // [0, 5, 6, 4, 3, 2, 1]
console.log(findOrder(4 , [[1,0],[2,0],[3,1],[3,2]])); // 
console.log(findOrder(7 , [[1,0],[0,3],[0,2],[3,2],[2,5],[4,5],[5,6],[2,4]]));
console.log(findOrder(10 , [[5,8],[3,5],[1,9],[4,5],[0,2],[7,8],[4,9]]));
