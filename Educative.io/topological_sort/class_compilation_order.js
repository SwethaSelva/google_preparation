function findCompilationOrder(dependencies){
  let classes = [];
  let graph = {};
  let inDegree = {};

  for (let dep of dependencies) {
    if (!graph[dep[1]]) graph[dep[1]] = [];
    if (!inDegree[dep[0]]) inDegree[dep[0]] = 0;
    if (!inDegree[dep[1]]) inDegree[dep[1]] = 0;
    
    inDegree[dep[0]] += 1;
    graph[dep[1]].push(dep[0]);
  }

  let q = [];
  for (let dep in inDegree) {
    if (!inDegree[dep]) q.push(dep);
  }

  while (q.length) {
    let curClass = q.pop();
    classes.push(curClass);
    if (!graph[curClass]) continue;

    for (let child of graph[curClass]) {
      inDegree[child] -= 1;
      if (!inDegree[child]) q.push(child);
    }
  }

  return classes;
}

console.log(findCompilationOrder([["B","A"],["C","A"],["D","C"],["E","D"],["E","B"]]));
console.log(findCompilationOrder([
  ["B","A"],["C","A"],["D","B"],["E","B"],["E","D"],["E","C"],["F","D"],["F","E"],["F","C"]
]));
console.log(findCompilationOrder([["A","B"],["B","A"]]));
console.log(findCompilationOrder([["B","C"],["C","A"],["A","F"]]));
console.log(findCompilationOrder([["C","C"]]));