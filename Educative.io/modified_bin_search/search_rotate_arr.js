// function binarySearchRotated(nums, target) {
//   if (nums.length === 1) return nums[0] === target? 0: -1;
//   let firstIdx = findFirstIndex(nums);

//   let left = firstIdx;
//   let right = nums.length - 1;
//   if (firstIdx && nums[right] < target) {
//     left = 0;
//     right = firstIdx - 1;
//   }
//   let mid = Math.floor((left + right)/2);

//   while (left <= right) {
//     mid = Math.floor((left + right) / 2);
//     console.log({ left, right, mid });
//     if (nums[mid] === target) return mid;
//     else if (nums[mid] < target) left = mid + 1;
//     else right = mid - 1;
//   }
//   return nums[mid] === target ? mid: -1;
// }

function findFirstIndex(nums) {
  let left = 0;
  let right = nums.length - 1;
  let mid = Math.floor((left + right) / 2);
  while (left < right) {
    mid = Math.floor((left + right) / 2);
    if (nums[left] < nums[mid]) left = mid;
    else right = mid;
  }
  return mid + 1;
}

function binarySearchRotated(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid = -1;

  while (left <= right) {
    if (nums[left] === target) return left;
    if (nums[right] === target) return right;
    mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;

    if (nums[left] < nums[mid]) {
      if (nums[left] < target && nums[mid] > target) right = mid - 1;
      else left = mid + 1;
    } else {
      if (nums[right] < target) right = mid - 1;
      else left = mid + 1;
    }
  }
  return nums[mid] === target ? mid : -1;
}

console.log(binarySearchRotated([6, 7, 1, 2, 3, 4, 5], 3)); // 4
console.log(binarySearchRotated([6, 7, 1, 2, 3, 4, 5], 6)); // 0
console.log(binarySearchRotated([4, 5, 6, 1, 2, 3], 3)); // 5
console.log(binarySearchRotated([4, 5, 6, 1, 2, 3], 6)); // 2
console.log(binarySearchRotated([4], 1)); // -1
console.log(binarySearchRotated([4, 1], 1)); // 1