function get_k_sum_subsets1(set_of_integers, target_sum) {
  let subsets = [[[], 0]];
  let result = [];
  for (let i = 0; i < set_of_integers.length; i++) {
    let len = subsets.length;
    for (let j = 0; j < len; j++) {
      let curSumVal = subsets[j][1] + set_of_integers[i];
      let curSubset = [...subsets[j][0], set_of_integers[i]]
      subsets.push([curSubset, curSumVal]);
      if (subsets[j][1] + set_of_integers[i] === target_sum) result.push(curSubset);
    }
  }
  return result;
}

let subarraySum = function(nums, k) {
  let count = 0;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum === k) count++;
    }
    sum = 0;
  }
  return count++;
};


/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 let combinationSum2 = function(candidates, target, curIdx = 0, subsets = [], result = []) {
  if (curIdx >= candidates.length) return result;

  let curVal = candidates[curIdx];
  let curCombo = [candidates[curIdx]];
  if (subsets[0] && subsets[0].length === 2) {
    curVal += subsets[0][0];
    curCombo.push(...subsets[0][1]);  
  }
  if (curVal === target) result.push(curCombo);
  subsets.unshift([curVal, curCombo]);

  for (let i = curIdx; i < candidates.length; i++) {
    combinationSum2(candidates, target, i+1, subsets, result);
    console.log(curVal, JSON.stringify(subsets), JSON.stringify(subsets));
    curCombo.pop();
  }
  return result;
};

// console.log(combinationSum2([8,13,3,22,17,39,87,45,36] , 3));
// console.log(combinationSum2([8,13,3,22,17,39,87,45,36] , 47));
// console.log(combinationSum2([8,13,3,22,17,39,87,45,36] , 135));
// console.log(combinationSum2([8,13,3,22,17,39,87,45,36] , 100));
// console.log(combinationSum2([8,13,3,22,17,39,87,45,36] , 270));
// console.log(combinationSum2([8,13,3,22,17,39,87,45,36] , 1));
console.log(combinationSum2([10,1,8], 8));