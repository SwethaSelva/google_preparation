var makesquare = function(matchsticks) {
    if (matchsticks.length < 4) return false; // total len is less than 4
  
    const sum = matchsticks.reduce((acc, cur) => acc + cur, 0);
    if (sum % 4) return false; // Sum is not divisible by 4
  
    matchsticks.sort((a,b) => b - a);
    let requiredSum = sum / 4;
    if (matchsticks[0] > requiredSum) return false; // largest ele should be less than sum / 4
  
    return function backTracking (visited = {}, sideList = [0,0,0,0]) {
      if (Object.keys(visited).length === matchsticks.length) {
        if (sideList.every(side => side === requiredSum)) return true;
      }
  
      for (let i = 0; i < matchsticks.length; i++) {
        if (visited[i]) continue;
  
        for (let j = 0; j < sideList.length; j++) {
          if (sideList[j] + matchsticks[i] <= requiredSum) {
            sideList[j] += matchsticks[i];
            visited[i] = true;
            if (backTracking(visited, sideList)) return true;
            visited[i] = false;
            sideList[j] -= matchsticks[i];
          }
        }
      }
      return false;
    }();
};

// console.log(makesquare([3,3,3,3,4]));
// console.log(makesquare([1,1,2,2,2]));
// console.log(makesquare([2,3,3,3,3,3,3,3,3,4,4,5,13]));

// console.log(makesquare([[0,0,0],[0,0,0]], 0, 0, 0));



/**
 * @param {string} s
 * @return {number}
 */
function gasStationJourney(gas, cost){
    let reducingGas = 0;
    let positiveIdx = -1;
  
    for (let i = 0; i < gas.length; i++) {
      let diff = gas[i] - cost[i];
      if (reducingGas >= 0) positiveIdx = i;
      reducingGas += diff;
    }
  
    return reducingGas < 0? -1: positiveIdx;
  }


// console.log(gasStationJourney(
//     [1, 2, 3, 4, 5],
//     [3, 4, 5, 1, 2]
// )); // -2, -4, -6, -3
