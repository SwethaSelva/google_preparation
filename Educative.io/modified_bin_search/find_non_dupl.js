// function singleNonDuplicate(nums) {
//   let left = 0;
//   let right = nums.length - 1;
//   let mid = -1;
//   while (left <= right) {
//     mid = (left + right) / 2;
//     // Next is equal
//     if (mid + 1 < nums.length && nums[mid] === nums[mid + 1]) {
//       // isOdd(firstHalf - 1) || nextHalf + 1 
//       if ((mid - left) % 2) right = mid - 1;
//       else left = mid + 2;
//     }
//     // prev is equal
//     else if (mid > 0 && nums[mid] === nums[mid - 1]) {
//       // isOdd(firstHalf - 2) || nextHalf
//       if ((right - mid) % 2) left = mid + 1;
//       else right = mid - 2;
//     }
//     // both is not matched, then this is the one
//     else return nums[mid];
//   }
//   return mid === -1? mid: nums[mid];
// }

function singleNonDuplicate(nums) {
  let left = 0;
  let right = nums.length;
  let mid = Math.floor((left + right) / 2);

  while (left < right)  {
    mid = Math.floor((left + right) / 2);
    if (mid % 2) mid--;
    if (nums[mid] === nums[mid+1]) {
      left = mid + 2;
    } else {
      right = mid;
    }
  }
  return nums[left];
}

console.log(singleNonDuplicate([1,1,2,2,3,3,4,4,5,8,8])); // 5
console.log(singleNonDuplicate([1])); // 1
console.log(singleNonDuplicate([1,1,2,2,3,3,4,4,5,5,6])); // 6
console.log(singleNonDuplicate([1,1,4,4,7,7,10,10,13,13,16,16,19,19,22,22,25]));// 25
console.log(singleNonDuplicate([0,0,1,1,2,2,4,8,8,16,16,32,32])); // 4