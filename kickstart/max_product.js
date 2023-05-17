var maxProduct = function(nums) {
    if (nums.length === 1) return nums[0];
    let max = 0;
    let dp = [];
    let multiplier = 1;
    for (let i = 0; i < nums.length; i++) {
        multiplier *= nums[i];
        max = Math.max(max, parseInt(multiplier));
        dp.push(multiplier);
    }

    for (let i = 1; i < nums.length; i++) {
        for (let j = i; j < dp.length; j++) {
            if (nums[i-1]) dp[j] /= nums[i-1];
            else dp[j] = nums[i];
            console.log(dp[j])
            max = Math.max(max, dp[j]);
        }
    }
    return max;
};

console.log(maxProduct([1,0,-1,2,3,-5,-2]));