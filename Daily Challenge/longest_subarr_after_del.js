/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    if (nums.length === 1) return 0;
  
    let result = 0;
    let leftPtr = 0;
    while (!nums[leftPtr] && leftPtr < nums.length) leftPtr++;
    // If one is not present, return zero
    if (leftPtr >= nums.length) return 0;
  
    let rightPtr = leftPtr;
    let prevCount = 0;
    let isZeroThere = nums[0] === 0;
    
    while (rightPtr < nums.length) {
      if (!nums[rightPtr]) {
        isZeroThere = 1;
        result = Math.max(result, prevCount + rightPtr - leftPtr);
        // Checking delete one element gives continuous ones'
        prevCount = nums[rightPtr+1] ? rightPtr - leftPtr : 0;
  
        // To find the check one in the nums
        while (!nums[rightPtr] && rightPtr < nums.length) rightPtr++;
        leftPtr = rightPtr;
      }
      rightPtr++;
    }
  
    // If zero is not present in nums, delete one element
    if (!isZeroThere) return nums.length - 1;
    // console.log({ prevCount, rightPtr, leftPtr})
    return Math.max(result, prevCount + rightPtr - leftPtr);
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let deleted = 0;
    let rIdx = 0;
    let lIdx = 0;

    let max = 0;

    while(rIdx < nums.length) {
        if (nums[rIdx] === 1 || deleted === 0) {
            if (nums[rIdx] === 0) deleted = 1;
            max = Math.max(max, rIdx - lIdx - deleted + 1);
            ++rIdx;
        } else {
            if (nums[lIdx] === 0) deleted = 0;
            ++lIdx;
        }
    }

    return max === nums.length ? nums.length - 1 : max;
};