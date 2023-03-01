function canPartitionArray(nums) {
  let sum = nums.reduce((acc, cur) => acc + cur, 0);
  return recursive(nums, sum);
}

function recursive (nums, firstSum, secondSum = 0, counter = 0) {
  // console.log({ firstSum, secondSum });
  if (counter >= nums.length) return false;
  if (firstSum === secondSum) return true;
  for (let i = counter; i < nums.length; i++) {
    if (recursive(nums, firstSum - nums[i], secondSum + nums[i], counter + 1)) return true;
  }
  return false;
}

// console.log(canPartitionArray([3,1,1,2,2,1]));
// console.log(canPartitionArray([1,3,7,3]));
// console.log(canPartitionArray([1,2,3]));
console.log(canPartitionArray([1,2,5]));
// console.log(canPartitionArray([1,3,4,8]));