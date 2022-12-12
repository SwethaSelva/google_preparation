function jumpGame(nums){
  let target = nums.length - 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    if (target - i <= nums[i]) target = i;
  }
  return target === 0;
}

console.log(jumpGame([2,3,1,1,9])); // true
console.log(jumpGame([3,2,1,0,4])); // false
console.log(jumpGame([4,0,0,0,4])); // true
console.log(jumpGame([0])); // true
console.log(jumpGame([1])); // true