// Recursive
function findTargetSumWays (nums, target, curIdx = 0, curSum = 0) {
    if (nums.length <= curIdx) return target === curSum? 1: 0;

    return findTargetSumWays(nums, target, curIdx+1, curSum - nums[curIdx])
        + findTargetSumWays(nums, target, curIdx+1, curSum + nums[curIdx]);
};

// Top-down approach
function findTargetSumWays1(nums, target, curIdx = 0, curSum = 0, cache = {}) {
    if (nums.length <= curIdx) return target ===  curSum? 1: 0;
    if (cache[curSum]) return cache[curSum];

    cache[curSum] = findTargetSumWays(nums, target, curIdx+1, curSum - nums[curIdx])
        + findTargetSumWays(nums, target, curIdx+1, curSum + nums[curIdx]);;
    return cache[curSum]
}

/**
        | -5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 |
        |  0 |  0 |  0 |  0 |  0 | 0 | 0 | 0 | 0 | 0 | 0 |
     1  |  0 |  0 |  0 |  0 |  1 | 0 | 1 | 0 | 0 | 0 | 0 |
     2  |  0 |  0 |  1 |  1 |  1 | 0 | 
     1  |  0 |  1 |  0 |  1 |  0 | 1 | 0 |
     1  |  0 |  1 |  0 |  1 |  0 | 1 | 0 |
 */
console.time('start')
console.log(findTargetSumWays([1,2,1,1], 3));
console.timeEnd('start')