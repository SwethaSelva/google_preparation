/**
 * https://leetcode.com/problems/frequency-of-the-most-frequent-element
 * @param {*} nums 
 * @param {*} k 
 * @returns 
 */
var maxFrequency = function (nums, k) {
  let maxMatch = 1;
  nums.sort((a, b) => a - b);

  let curK = 0;
  let left = 0;
  let right = 1;

  while (right < nums.length) {
    curK += (nums[right] - nums[right-1]) * (right - left);
    if (curK <= k) maxMatch = Math.max(maxMatch, right - left + 1);

    while (left < right && curK >= k) {
      curK -= (nums[right] - nums[left]);
      left++;
    }
    right++;
  }
  return maxMatch;
};

console.log(maxFrequency([1,4,8,13], 5)); // 2
console.log(maxFrequency([3,9,6], 2)); // 1