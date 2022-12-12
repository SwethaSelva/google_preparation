function findClosestElements(nums, k, num) {
  if (nums.length <= k) return nums;
  let resultArr = [];

  let left = 0;
  let right = nums.length;
  let mid = Math.floor((left + right) / 2);

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid] === num) break;
    else if (nums[mid] < num) left = mid + 1;
    else right = mid - 1;
  }

  if (mid === 0) return nums.slice(mid, k);
  else if (mid >= nums.length - 1) return nums.slice(nums.length - k);
  resultArr.push(nums[mid]);
  let start = mid - 1;
  let end = mid + 1;
  while (resultArr.length < k && (start >= 0 || end < nums.length)) {
    if (start >= 0 && end < nums.length) {
      if (Math.abs(nums[start] - num) <= Math.abs(nums[end] - num)) {
        resultArr.unshift(nums[start]);
        start--;
      } else {
        resultArr.push(nums[end]);
        end++;
      }
    } else {
      if (start >= 0) resultArr.push(nums[start]);
      else resultArr.push(num[end]);
    }
  }
  return resultArr;
}

console.log(findClosestElements([1,2,3,4,5] , 4 , 3));
console.log(findClosestElements([1,2,3,4,5] , 4 , -1));
console.log(findClosestElements([1,2,3,4,5,6,7] , 5 , 7));
console.log(findClosestElements([-29,-11,-3,0,5,10,50,63,198] , 6 , 8));
console.log(findClosestElements([-10,-6,-4,-3] , 2 , 5));
console.log(findClosestElements([5, 9, 10, 13, 21, 30, 32, 49] , 5 , 21));