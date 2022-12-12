function twoCityScheduling(costs){
  for (let i = 0; i < costs.length; i++) {
    costs[i][2] = costs[0] - costs[1];
  }
  costs = costs.sort((a,b) => a[2] - b[2]);
  let minCost = 0;
  for (let i = 0; i < costs.length; i++) {
    if (i < costs.length / 2) minCost += costs[i];
    else minCost -= costs[i];
  }
  return minCost;
}