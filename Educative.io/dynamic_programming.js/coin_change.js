// function coinChange(coins, total){
//   let NoOfMinCoin = 0;
//   coins = coins.sort((a,b) => b - a);
//   let remaining = backTracking();
//   return remaining === 0? NoOfMinCoin: -1;

//   function backTracking (remainingCoin = total, minCoin = 0, costPos = 0) {
//     if (remainingCoin === 0) {
//       NoOfMinCoin = minCoin;
//       return remainingCoin;
//     }
//     for (let i = costPos; i < coins.length; i++) {
//       if (coins[i] > remainingCoin) continue;
//       let newRCoin = backTracking(remainingCoin % coins[i], minCoin + Math.floor(remainingCoin / coins[i]), i);
//       if (!newRCoin) return newRCoin;
//     }
//     return remainingCoin;
//   }
// }

// function coinChange(coins, total) {
//   if (!total) return total;
//   let hash = {};
//   helper(coins, total, hash);
//   let minCoins = Infinity;

//   for (let num in hash) {
//     let rCoins = total % num;
//     console.log({ rCoins, num })
//     if (rCoins in hash) {
//       let curCoins = hash[rCoins] + hash[num] * Math.floor(total / num);
//       minCoins = Math.min(minCoins, curCoins)
//     }
//   }
//   console.log({ hash })
//   return minCoins === Infinity? -1: minCoins;
// }

// function helper (coins, total, hash, start = 0, sum = 0, coinCount = 0) {
//   hash[sum] = coinCount;
//   if (start >= coins.length) return;
//   for (let i = start; i < coins.length; i++) {
//     if (total < sum + coins[i]) continue;
//     helper(coins, total, hash, i + 1, sum + coins[i], coinCount + 1);
//   }
//   return;
// }

function coinChange (coins, total) {
  let dp = new Array(total + 1).fill(Infinity);
  dp[0] = 0;
  for (let j = 0; j < dp.length; j++) {
    for (let i = 0; i < coins.length; i++) {
      if (j < coins[i]) continue;
      dp[j] = Math.min(dp[j], 1 + dp[j - coins[i]]);
    }
  }
  console.log(JSON.stringify(dp), dp[83]);
  return dp[total] === Infinity ? -1: dp[total];
}

// console.log(coinChange([1,2,5] , 11)); // 3
// console.log(coinChange([2] , 4)); // 2
// console.log(coinChange([5] , 3)); // -1
// console.log(coinChange([1,2,5] , 0)); // 0
// console.log(coinChange([2,3,4,6,8] , 23)); // 4
// console.log(coinChange([186,419,83,408], 6249)); // 20
console.log(coinChange([474,83,404,3], 264)); // 8