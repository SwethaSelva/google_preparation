function findSumOfThree(nums, target) {
  nums = nums.sort((a,b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    let start = i+1;
    let end = nums.length - 1;
    while (start < end) {
      if (nums[i] + nums[start] + nums[end] === target) return true;
      else if (nums[i] + nums[start] + nums[end] < target) start++;
      else end--;
    }
  }
  return false
}

console.log(findSumOfThree([1,-1,0] , -1));
console.log(findSumOfThree([3,7,1,2,8,4,5] , 10));
console.log(findSumOfThree([3,7,1,2,8,4,5] , 20));
console.log(findSumOfThree([3,7,1,2,8,4,5] , 21));
console.log(findSumOfThree([-1,2,1,-4,5,-3] , -8));
console.log(findSumOfThree([-1,2,1,-4,5,-3] , 0));
console.log(findSumOfThree([-1,2,1,-4,5,-3] , 7));

/**
 * Pseudo code for 3 sum
 * sort the arr to implement 2 pointer method.
 * start pointer, end pointer
 * if arr.length < 3 return false
 * loop (0...ar.length)
 * second loop (start = outloop counter + 1 < end = )
 */