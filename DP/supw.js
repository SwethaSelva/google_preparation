/**
 * There a activity released for year. 
 * Nikil the class co-ordinator plan to assign min work. 
 * According to the rule, no students goes 3 days in a row without participate in the activity.
 * Eg-1: 3,2,1,1,2,3,1,3,2,1 - 3rd day (1) + 4th day (1) + 7th day (1) + 10th day (1) = 4 hours
 * Eg-2: 2,2,3,2,2 - 3rd day (3)
 */

function minWorkAct (activityArr) {
  if (activityArr < 4) return Math.min(...activityArr);

  let dp = new Array(activityArr.length).fill(0);
  dp[activityArr.length - 1] = activityArr.at(-1);
  dp[activityArr.length - 2] = activityArr.at(-2);
  dp[activityArr.length - 3] = activityArr.at(-3);

  for (let i = activityArr.length - 4; i >= 0; i--) {
    dp[i] = activityArr[i] + Math.min(dp[i+1], dp[i+2], dp[i+3]);
  }

  return Math.min(dp[0], dp[1], dp[2]);
}

console.log(minWorkAct([2,2,3,2,2])); // 3
console.log(minWorkAct([3,2,1,1,2,3,1,3,2,1])); // 4
console.log(minWorkAct([3,2,1,1,2,3,58,3,2,1])); // 4