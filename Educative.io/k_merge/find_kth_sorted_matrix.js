let MinHeap = require('./Heap');

function kSmallestNumber1(lists, k){
  if (!lists.length) return lists;

  let minHeap = new MinHeap();
  let kthEle = 0;
  for (let i = 0; i < k; i++) {
    for (let j = 0; j < lists.length && k > minHeap.findLength(); j++) {
      if (lists[j][i]) minHeap.insert(lists[j][i]);
    }
    kthEle = minHeap.pop();
    if (!minHeap.findLength()) return kthEle;
  }
  return kthEle;
}

function kSmallestNumber(lists, k) {
  if (!lists.length) return 0;
  let kthEle = 0;

  let minHeap = new MinHeap();
  minHeap.compareFn = (a,b) => a[1][a[0]] < b[1][b[0]];
  for (let i = 0; i < lists.length; i++) {
    if (lists[i][0]) minHeap.insert([0, lists[i]]);
  }

  for (let i = 0; i < k && minHeap.size(); i++) {
    let smallestVal = minHeap.pop();
    kthEle = smallestVal[1][smallestVal[0]];
    let index = smallestVal[0] + 1;
    if (smallestVal[1][smallestVal[0] + 1]) minHeap.insert([index, smallestVal[1]]);
  }
  return kthEle;
}

console.log(kSmallestNumber([[2,6,8],[3,7,10],[5,8,11]] , 5)); // 7
console.log(kSmallestNumber([[1,2,3],[4,5],[6,7,8,15],[10,11,12,13],[5,10]] , 50)); // 15
console.log(kSmallestNumber([[1,1,1],[1,1,1]] , 4)); // 1
console.log(kSmallestNumber([[4,6],[2,3],[8,9]] , 10)); // 9
console.log(kSmallestNumber([[5,8,9,17],[1,6,6,6],[8,17,23,24]] , 6)); // 8