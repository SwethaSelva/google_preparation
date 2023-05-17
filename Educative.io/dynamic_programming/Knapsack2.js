/**
 * Max (v[i - 1, w], v[i, w - w[i]] + p[i])

    | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
    ----------------------------------------
  0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
  1 | 0 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 |
  2 | 0 | 1 | 1 |  |  |  |  |  |  |
  5 | 0 |  |  |  |  |  |  |  |  |
  6 | 0 |  |  |  |  |  |  |  |  |
    ----------------------------------------
 */

function knapSack (weight, profit, targetCapacity) {
    let dp = new Array(weight.length + 1);
    for (let i = 0; i < dp.length; i++) dp[i] = new Array(targetCapacity + 1).fill(0);

    for (let i = 1; i < dp.length; i++) {
        for (let j = 1; j < dp[i].length; j++) {
            dp[i][j] = dp[i][j-1];
            if (dp[i][targetCapacity - weight[j]] !== undefined) dp[i][j] = Math.max(dp[i][j], dp[i][targetCapacity - weight[j]] + profit[j]);
        }
    }
    console.log({ dp })
    return dp[weight.length][targetCapacity];
}

/**
            [2]                         []
    [2,3]           [2]             [3]    []
[2,3,4]    [2,3]
 */

// Recursive - [2,3,41,2] [30,41,1,12] 45
function knapSackRecursive(weight, profit, totalWeight) {
    return function recursive (curIdx = 0, prevWeight = 0, prevProfit = 0) {
        if (curIdx >= weight.length) return prevProfit;

        let curProfit = recursive(curIdx + 1, prevWeight, prevProfit);
        if (weight[curIdx] + prevWeight <= totalWeight) {
            curProfit = Math.max(
                curProfit,
                recursive(curIdx + 1, prevWeight + weight[curIdx], prevProfit + profit[curIdx])
            );
        }
        return curProfit;
    }()
}

// Top-down approach
function knapSack (weight, profit, totalWeight) {
    
}

console.log(knapSack([2,3,4,5], [1,2,5,6], 8)); // 8
console.log(knapSack([2,3,4,5], [1,2,5,6], 10)); // 11
console.log(knapSack([2,3,4,5], [1,-2,5,-6], 10)); // 6