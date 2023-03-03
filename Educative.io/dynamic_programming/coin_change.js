// Recursive
function coinChangeRecursive (coins, amount) {
  if (amount <= 0) return amount;
  let result = Infinity;
  for (let i = 0; i < coins.length; i++) {
    if (coins[i] > amount) continue;

    let change = coinChange(coins, amount % coins[i]);
    if (change === -1) continue;
    result = Math.min(result, Math.floor(amount / coins[i]) + change);
  }

  if (result === Infinity) return -1;
  return result;
}

// Top-down approach - Added Cache for repeated subproblem.
function coinChangeDP1(coins, amount, cache = new Array(amount + 1).fill(-1)) {
  if (amount <= 0) return amount;
  
  let result = Infinity;
  for (let i = 0; i < coins.length; i++) {
    if (coins[i] > amount) continue;
    
    let change = 0;
    if (cache[amount] > -1) change = cache[amount] 
    else change = coinChange(coins, amount % coins[i]);

    if (change === -1) continue;
    result = Math.min(result, Math.floor(amount / coins[i]) + change);
  }
  
  cache[amount] = result;
  if (result === Infinity) return -1;
  return result;
}

// Bottom-up approach: 1D - Build coinChange for each and every amount till it reaches actual amount.
function coinChange (coins, amount) {
  let cache = new Array(amount + 1).fill(Infinity);
  cache[0] = 0;

  for (let curAmount = 1; curAmount < cache.length; curAmount++) {
    for (let coin of coins) {
      if (curAmount < coin) continue;

      cache[curAmount] = Math.min(cache[curAmount], 1 + cache[curAmount - coin]);
    }
  }
  return cache[amount] === Infinity? -1: cache[amount];
}

console.log(coinChange([1, 2, 5], 11)); // 3
console.log(coinChange([2], 4)); // 2
console.log(coinChange([5], 3)); // -1
console.log(coinChange([1, 2, 5], 0)); // 0
console.log(coinChange([2, 3, 4, 6, 8], 23)); // 4
console.log(coinChange([186,419,83,408], 6249)); // 20
console.log(coinChange([474, 83, 404, 3], 264)); // 8