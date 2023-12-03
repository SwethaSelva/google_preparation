var sortItems = function(n, m, group, beforeItems) {
  let q = [];
  let adjList = new Array(n).fill(0).map(() => []);

  for (let i = 0; i < beforeItems.length; i++) {
    if (!beforeItems[i].length) q.push([i, group[i]]);
    else {
      for (let j = 0; j < beforeItems[i].length; j++) {
        adjList[beforeItems[i][j]].push(i);
      }
    }
  }
  q.sort((a, b) => a[1] - b[1]);

  let result = [];
  while (q.length) {
    let curItem = q.pop()[0];
    result.push(curItem);

    for (let item of adjList[curItem]) {
      beforeItems[item].pop();
      if (!beforeItems[item].length) q.push([item, group[item]]);

      q.sort((a,b) => a[1] - b[1]);
    }
  }

  return result.length === n? result: [];
};

console.log(sortItems(5, 5, [2,0,-1,3,0], [[2,1,3],[2,4],[],[],[]])); // [3,2,4,1,0]