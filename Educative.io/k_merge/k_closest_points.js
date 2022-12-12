let Heap = require('./Heap');
function topKFrequent(arr, k){
  let hash = {};
  let result = [];
  let minCountHeap = new Heap();
  minCountHeap.compareFn = (a, b) => b.count < a.count;
  for (let i = 0; i < arr.length; i++) {
      if (!hash[arr[i]]) hash[arr[i]] = 0;
      hash[arr[i]] += 1;
  }
  for (let ele in hash) {
      minCountHeap.insert({ val: +ele, count: hash[ele] });
  }
  console.log(JSON.stringify(minCountHeap.heap), hash);
  while (k--) {
      let { val } = minCountHeap.pop();
      result.unshift(val);
  }
  return result;
}

// console.log(topKFrequent([3,2,3,1,2,4,5,5,6,7,7,8,2,3,1,1,1,10,11,5,6,2,4,7,8,5,6] , 10));
console.log(topKFrequent([5,1,-1,-8,-7,8,-5,0,1,10,8,0,-4,3,-1,-1,4,-5,4,-3,0,2,2,2,4,-2,-4,8,-7,-7,2,-8,0,-8,10,8,-8,-2,-9,4,-7,6,6,-1,4,2,8,-3,5,-9,-3,6,-8,-5,5,10,2,-5,-1,-5,1,-3,7,0,8,-2,-3,-1,-5,4,7,-9,0,2,10,4,4,-4,-1,-1,6,-8,-9,-1,9,-9,3,5,1,6,-1,-2,4,2,4,-6,4,4,5,-5] , 7));
// console.log(topKFrequent([1,1,1,1,1,1] , 1));
// console.log(topKFrequent([6,0,1,4,9,7,-3,1,-4,-8,4,-7,-3,3,2,-3,9,5,-4,0] , 6));