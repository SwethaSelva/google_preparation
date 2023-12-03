/**
 * https://leetcode.com/problems/reduction-operations-to-make-the-array-elements-equal
 * @param {*} nums 
 * @returns 
 */
var reductionOperations = function(nums) {
  nums.sort((a,b) => b - a);

  let opCount = 0;
  let prevIdx = 0;
  
  for (let curIdx = 1; curIdx < nums.length; curIdx++) {
    if (nums[curIdx] === nums[prevIdx]) continue;

    opCount += curIdx;
    prevIdx = curIdx;
  }
  return opCount;
};

// console.log(reductionOperations([5,1,3])); // 3
console.log(reductionOperations([1,2,4,5,5,6,7])); // 18
console.log(reductionOperations([1,1,2,2,3])); // 4