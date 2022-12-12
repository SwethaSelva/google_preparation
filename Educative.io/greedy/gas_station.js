function gasStationJourney(gas, cost){
  const sumGas = gas.reduce((acc, cur) => acc + cur);
  const sumCost = cost.reduce((acc, cur) => acc + cur);
  if (sumCost > sumGas) return -1;

  let totalGas = 0;
  let startIdx = 0;
  for (let i = 0; i < gas.length; i++) {
    totalGas += (gas[i] - cost[i]);
    if (totalGas < 0) {
      totalGas = 0;
      startIdx = i + 1;
    }
  }
  return startIdx;
}
console.log(gasStationJourney([1,2,3,4,5] , [3,4,5,1,2])); // 3
console.log(gasStationJourney([2,3,4] , [3,4,3])); // -1
console.log(gasStationJourney([1,1,1,1,10] , [2,2,1,3,1])); // 4
console.log(gasStationJourney([1,1,1,1,1] , [1,2,3,4,5])); // -1
console.log(gasStationJourney([1] , [1])); // 0
console.log(gasStationJourney([5,8,2,8], [6,5,6,6])); // 3
console.log(gasStationJourney([5,1,2,3,4], [4,4,1,5,1])); // 4
console.log(gasStationJourney([3,1,1], [1,2,2])); // 0