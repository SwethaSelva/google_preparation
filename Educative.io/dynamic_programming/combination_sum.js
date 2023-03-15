/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let dp = Array.from({ length: target + 1 }).map(() => []);

  for (let i = 1; i < dp.length; i++) {
    for (let j = 0; j < candidates.length && candidates[j] <= i; j++) {
      let curCand = candidates[j];

      if (i === curCand) dp[i].push([curCand]);
      else if (dp[i-curCand].length) {
        for (let poss of dp[i - curCand]) {
          if (curCand >= poss[poss.length - 1]) {
            dp[i].push([...poss, curCand])
          }
        }
      }
    }
  }
  return dp[target];
};

console.log(combinationSum([2,3,6,7], 7));