class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}

class MinHeapForEndTime {
  constructor () {
    this.heap = [];
  }
  findChildren (parentIdx) {
    return [2*parentIdx + 1, 2*parentIdx + 2];
  }
  findParent (childIdx) {
    return Math.floor((childIdx - 1) / 2);
  }
  insert (val) {
    let childIdx = this.heap.push(val) - 1;
    let parentIdx = this.findParent(childIdx);
    while (parentIdx >= 0) {
      if (this.heap[parentIdx] <= this.heap[childIdx]) return true;
      [this.heap[parentIdx], this.heap[childIdx]] = [this.heap[childIdx], this.heap[parentIdx]];
      childIdx = parentIdx;
      parentIdx = this.findParent(parentIdx);
    }
  }
  deleteMaxVal () {
    if (!this.heap.length) return this.heap = [];
    let parentIdx = 0;
    let childIdx = -1;
    while (parentIdx < this.heap.length - 1) {
      let [leftChildIdx, rightChildIdx] = this.findChildren(parentIdx);
      if (leftChildIdx >= this.heap.length) break;

      childIdx = leftChildIdx;
      if (
        rightChildIdx < this.heap.length
        && this.heap[rightChildIdx] < this.heap[leftChildIdx]
      ) childIdx = rightChildIdx;

      [this.heap[childIdx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[childIdx]];
      parentIdx = childIdx;
    }
    if (parentIdx < this.heap.length - 1) [this.heap[this.heap.length - 1], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[this.heap.length - 1]];
    this.heap.pop();
    return this.heap;
  }
  findPeak () {
    return this.heap[0];
  }
  findLength () {
    return this.heap.length;
  }
}

function findSets(intervals){
  let minHeap = new MinHeapForEndTime();
  intervals = intervals.sort((a,b) => a[0] - b[0]);
  minHeap.insert(intervals[0][1]);
  for (let i = 1; i < intervals.length; i++) {
    if (minHeap.findPeak() <= intervals[i][0]) minHeap.deleteMaxVal();
    minHeap.insert(intervals[i][1]);
  }
  return minHeap.findLength();
}
console.log(findSets([[2, 8], [3, 4], [3, 9], [5, 11], [8, 20], [11, 15]])); // 3
console.log(findSets([[1, 2], [4, 6], [3, 4], [7, 8]])); // 1
console.log(findSets([[1, 7], [2, 6], [3, 7], [4, 8], [5, 8]])); // 5
