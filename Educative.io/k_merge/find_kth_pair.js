let Heap = require('./Heap');

function isValid (val1, val2) {
  return val1 !== undefined && val2 !== undefined;
}

function kSmallestPairs(list1, list2, k){
  let result = [];
  if (!k) return result;

  let pairHeap = new Heap();
  pairHeap.compareFn = (a, b) => a[0] < b[0];

  for (let i = 0; i < list1.length; i++) {
    for (let j = 0; j < list2.length; j++) {
      pairHeap.insert([list1[i] + list2[j], list1[i], list2[j]]);
      if (i !== j && isValid(list1[j], list2[i])) pairHeap.insert([list1[j] + list2[i], list1[j], list2[i]]);
      
      if (result.length >= k || !pairHeap.size()) return result;
      let smallestPair = pairHeap.pop();
      result.push([smallestPair[1], smallestPair[2]]);
    }
  }

  while (result.length < k && pairHeap.size()) {
    let smallestPair = pairHeap.pop();
    result.push([smallestPair[1], smallestPair[2]]);
  }
  return result;
}

console.log(kSmallestPairs([1,2,300] , [1,11,20,35,300] , 30));
console.log(kSmallestPairs([1,1,2] , [1,2,3] , 1));
console.log(kSmallestPairs([4,6] , [2,3] , 2));
console.log(kSmallestPairs([4,7,9] , [4,7,9] , 5));
console.log(kSmallestPairs([1,1,2] , [1] , 4));