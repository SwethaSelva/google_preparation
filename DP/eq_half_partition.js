var canPartition = function(nums) {
    let sum = nums.reduce((acc, cur) => acc + cur, 0);
    if (sum % 2) return false;
  
    let memo = {}; // sum: false
    backTracking();
  
    function backTracking (curPath = [], leftSum = 0, rightSum = sum) {
//   console.log({ leftSum, rightSum })
      if (curPath.length >= nums.length) return false;
    
      if (leftSum === rightSum) {
        console.log({ leftSum, rightSum, curPath })
        return memo[leftSum] = true;
      }
        if (leftSum in memo) return memo[leftSum];
      for (let i = 0; i < nums.length; i++) {
        if (curPath.includes(i)) continue;
  
        if (backTracking([...curPath, i], leftSum + nums[i], rightSum - nums[i])) {
          return memo[leftSum] = memo[rightSum] = true;
        }
      }
      memo[leftSum] = memo[rightSum] = false;
  
      return memo[leftSum];
    }
//   console.log({ memo })
    return memo[sum/2] || false;
};

console.log(canPartition([14,9,8,4,3,2]))