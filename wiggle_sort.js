function isNotValid(curIdx, pathIdxs, nums) {
  if (!pathIdxs.length) return false; 
  if (pathIdxs.includes(curIdx)) return true;

  let len = pathIdxs.length;
  let num1 = nums[pathIdxs.at(-1)];
  let num2 = nums[curIdx];

  return len % 2? num1 >= num2 : num1 <= num2;
}
/**
 * https://leetcode.com/problems/wiggle-sort-ii
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function (nums) {
  let idxs = backTracking() || [];
  return idxs.map(idx => nums[idx]);

  function backTracking(curPathIdxs = []) {
    if (curPathIdxs.length === nums.length) return curPathIdxs;

    for (let i = 0; i < nums.length; i++) {
      if (isNotValid(i, curPathIdxs, nums)) continue;

      curPathIdxs.push(i);
      if (backTracking(curPathIdxs)) return curPathIdxs;
      curPathIdxs.pop();
    }
    return false;
  }
};

console.log(wiggleSort([1,5,1,1,6,4]));
console.log(wiggleSort([1,3,2,2,3,1]));