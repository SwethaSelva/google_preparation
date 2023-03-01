function findMaxKnapSackProfit(capacity, weights, values){
  let highProfit = 0;
  let value = {};
  return dfs ();

  function dfs (start = 0, sum = 0, valSum = 0) {
    highProfit = Math.max(valSum, highProfit);
    if (start >= weights.length) return highProfit;

    dfs (start + 1, sum, valSum);
    if (sum + weights[start] > capacity) return highProfit;
    dfs (start + 1, sum + weights[start], valSum + values[start]);
    return highProfit;
  }
}

console.log(findMaxKnapSackProfit(6 , [1,2,3,5] , [1,5,4,8])); // 10
console.log(findMaxKnapSackProfit(3 , [4] , [2])); // 0
console.log(findMaxKnapSackProfit(3 , [2] , [3])); // 3
console.log(findMaxKnapSackProfit(10 , [3,6,10,7,2] , [12,10,15,17,13])); // 30 - 17 + 13
console.log(findMaxKnapSackProfit(30 , [10,20,30] , [22,33,44])); // 55
