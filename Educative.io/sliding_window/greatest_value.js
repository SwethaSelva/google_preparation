function findMaxSlidingWindow(nums, w) {
  if (w === 1) return nums;
  if (w > nums.length) w = nums.length;
  let result = [];
  let greatestValue = [0, 1];

  for (let i = 0; i < w; i++) {
    if (nums[greatestValue[1]] <= nums[i]) {
      greatestValue.shift();
      greatestValue.push(i);
    } else if (nums[greatestValue[0]] <= nums[i]) greatestValue[0] = i;
  }
  result.push(nums[greatestValue[1]]);

  if (w > nums.length) return result;
  for (let i = w; i < nums.length; i++) {
    if (greatestValue[1] <= i - w) {
      greatestValue.pop();
      greatestValue.unshift(i);
    } else if (greatestValue[0] <= i - w) greatestValue[0] = i;

    if (nums[i] >= nums[greatestValue[1]]) {
      greatestValue.push(i);
      greatestValue.shift();
    } else if (nums[i] >= nums[greatestValue[0]]) greatestValue[0] = i;
    result.push(nums[greatestValue[1]]);
  }
  return result;
}


console.log(findMaxSlidingWindow([10, 6, 9, -3, 23, -1, 34, 56, 67, -1, -4, -8, -2, 9, 10, 34, 67], 2))