/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartitionArray1 = function (nums) {
  if (nums.length < 2) return false;

  let sum = nums.reduce((acc, cur) => acc + cur);
  let mem = {};
  let res = dfs (0, sum);
  return res;

  function dfs(leftSum = 0, rightSum = 0, visited = {}) {
    if (leftSum === rightSum) return true;
    if (rightSum <= 0) return false;
    
    for (let i = 0; i < nums.length; i++) {
      if (visited[i]) continue;
      if (mem[leftSum + nums[i]]) return mem[leftSum + nums[i]];
      if (mem[rightSum - nums[i]]) return mem[rightSum - nums[i]];

      let res = dfs(leftSum + nums[i], rightSum - nums[i], { ...visited, [i]: true });
      mem[leftSum + nums[i]] = res;
      if (res) return true;
    }
    return false;
  }
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartitionArray1 = function(nums) {
  let sum = nums.reduce((acc, cur) => acc + cur);
  if (sum % 2) return false;
  let target = sum / 2;
  let possibleSums = new Set([0]);

  for (let i = 0; i < nums.length; i++) {
    let posSums = Array.from(possibleSums)
    for (let possibleSum of posSums) {
      if (!possibleSums.has(possibleSum + nums[i])) possibleSums.add(possibleSum + nums[i]);
    }
  }
  return possibleSums.has(target);
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartitionArray = function (nums) {
  let sum = nums.reduce((acc, cur) => acc + cur);
  if (sum % 2) return false;
  let target = sum / 2;
  
  let dp = Array.from({ length: nums.length }).map(() => new Array(target + 1).fill(false));
  dp[0][0] = true;
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j <= target; j++) {
      dp[i][j] = dp[i - 1][j - nums[i]] || dp[i-1][j];
    }
  }
  console.log({ dp });
  return dp[nums.length - 1][target];
};

console.log(canPartitionArray([1, 2, 5]));
console.log(canPartitionArray([1,3,7,3]));
console.log(canPartitionArray([1,2,3]));
console.log(canPartitionArray([1,2,3]));
console.log(canPartitionArray([1,3,4,8]));
console.log(canPartitionArray([3,3,3,4,5]));
console.log(canPartitionArray([1,5,11,5]));
console.log(canPartitionArray([1,2,3,5]));