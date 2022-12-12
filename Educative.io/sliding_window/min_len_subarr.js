function minSubArraylen(target, nums) {
  let smallRangeIdx = Infinity;
  let startIdx = 0;
  let endIdx = 0;
  let sum = nums[0];
  while (endIdx < nums.length) {
    if (sum >= target) {
      smallRangeIdx = Math.min(smallRangeIdx, endIdx - startIdx + 1);
      sum -= nums[startIdx++];
    }
    else sum += nums[++endIdx];
  }
  if (smallRangeIdx === Infinity) return 0;
  return smallRangeIdx;
}
/**
 * 5, 0, 1
 * 6, 0, 2
 * 
 */
console.log(minSubArraylen(129, [5, 4, 1, 6, 1, 8, 9, 100])); // 72
console.log(minSubArraylen(7, [2, 3, 1, 2, 4, 3])); // 2