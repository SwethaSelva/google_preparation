function networkDelayTime(times, n, k) {
    let adjList = new Array(n + 1).fill(0).map(_ => []); // [dest, time]
  
    for (let i = 0; i < times.length; i++) {
      let [src, dest, time] = times[i];
  
      adjList[src].push([dest, time]);
    }
  
    let distance = new Array(n + 1).fill(Infinity);
    distance[k] = 0;
    let visited = new Array(n + 1).fill(false);
  
    let q = [];
    q.push([k, 0]);
  
    while (q.length) {
      q.sort((a, b) => a[1] - b[1])
      let [node] = q.shift();
      if (visited[node]) continue;
      visited[node] = true;
  
      for (let neigh of adjList[node]) {
        let [neighNode, curTime] = neigh;
        let alt =  distance[node] + curTime;
  
        if (!visited[neighNode] && alt < distance[neighNode]) {
          distance[neighNode] = alt;
          q.push([neighNode, alt]);
        }
      }
    }
  
    distance.shift();
    let max = Math.max(...distance);
    return max === Infinity? -1: max;
}

console.log(networkDelayTime([[1,2,5],[1,3,10],[1,4,15]]));
console.log(networkDelayTime([[1,2,5],[1,3,5],[1,4,5],[2,4,5],[3,4,5]]));
console.log(networkDelayTime([[1,2,1],[2,3,2],[3,4,3],[4,1,4]]));
console.log(networkDelayTime([[1,2,1],[2,3,1],[3,4,1]]));
console.log(networkDelayTime([[1,2,1],[2,3,2],[3,4,3],[4,1,4]]));
  