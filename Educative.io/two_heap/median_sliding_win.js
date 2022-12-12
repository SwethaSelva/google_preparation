class MinHeap {
  constructor() {
    this.heap = [];
  }
  
}
function medianSlidingWindow(nums, k){
  if (k === 1 || k > nums.length) return nums;
  let result = [];
  for (let i = 0; i < k; i++) {

  }
  return result;
}

console.log(medianSlidingWindow([1,3,-1,-3,5,3,6,7] , 3));
console.log(medianSlidingWindow([3,4,5,1,8,-3,5,-4] , 4));
console.log(medianSlidingWindow([-7,2,5,-2,3,-1] , 2));
console.log(medianSlidingWindow([1,3,-1,-3,5,3,6,7] , 5));
console.log(medianSlidingWindow([-1,2,4,5] , 2));
console.log(medianSlidingWindow([1,2] , 1));
console.log(medianSlidingWindow([2147483647,-14756,21474,-2147483646,-2147483647,-5555,9999,78967] , 8));
console.log(medianSlidingWindow([2147483647,-14756,21474,-2147483646,-2147483647,-5555,9999,78967] , 7));
console.log(medianSlidingWindow([2147483647,-14756,21474,-2147483646,-2147483647,-5555,9999] , 2));