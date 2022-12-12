class Node {
  constructor(start = 0, end = 0) {
    this.start = start;
    this.end = end;
  }
}
class MinHeap {
  constructor() {
    this.heap = [];
  }
  findChildren (parentIdx) {
    return [2*parentIdx+1, 2*parentIdx+2];
  }
  findParent (childIdx) {
    return Math.floor((childIdx - 1)/2);
  }
  peek() {
    return this.heap[0];
  }
  pop(compareFn) {
    [this.heap[0], this.heap[this.findLength() - 1]] = [this.heap[this.findLength() - 1], this.heap[0]];
    let minVal = this.heap.pop();

    let curIdx = 0;
    const lastIdx = this.findLength() - 1;
    while (curIdx < lastIdx) {
      let [leftChildIdx, rightChildIdx] = this.findChildren(curIdx);
      if (leftChildIdx > lastIdx || !compareFn(this.heap[curIdx], this.heap[leftChildIdx])) break;
      let nextHeir = leftChildIdx;
      if (rightChildIdx <= lastIdx && compareFn(this.heap[leftChildIdx], this.heap[rightChildIdx]) && compareFn(this.heap[curIdx], this.heap[rightChildIdx])) {
        nextHeir = rightChildIdx;
      }
      [this.heap[curIdx], this.heap[nextHeir]] = [this.heap[nextHeir], this.heap[curIdx]];
      curIdx = nextHeir;
    }
    return minVal;
  }
  findLength() {
    return this.heap.length;
  }
  insert (start, end, compareFn) {
    let newVal = new Node(start, end);
    let curIdx = this.heap.push(newVal) - 1;
    let parentIdx = this.findParent(curIdx);
    while (parentIdx >= 0) {
      if (!compareFn(this.heap[parentIdx], this.heap[curIdx])) break;
      [this.heap[parentIdx], this.heap[curIdx]] = [this.heap[curIdx], this.heap[parentIdx]];
      curIdx = parentIdx;
      parentIdx = this.findParent(curIdx);
    }
    return this;
  }
  peek() {
    return this.heap[0];
  }
}

function tasks(tasksList){
  let startInterval = new MinHeap();
  for (let task of tasksList) startInterval.insert(...task, (a, b) => a.start > b.start);

  let endInterval = new MinHeap();
  let { start, end } = startInterval.pop((a,b) => a.start > b.start);
  endInterval.insert(start, end, (a, b) => a.start > b.start);

  while (startInterval.findLength()) {
    let { start, end } = startInterval.pop((a,b) => a.start > b.start);
    if (endInterval.peek().end <= start && endInterval.peek().end <= end) {
      endInterval.pop((a,b) => a.end > b.end);
    }
    endInterval.insert(start, end, (a,b) => a.end > b.end);
  }
  return endInterval.findLength();
}

console.log(tasks([[1,1],[5,5],[8,8],[4,4],[6,6],[10,10],[7,7]])); // 1
console.log(tasks([[1,7],[1,7],[1,7],[1,7],[1,7],[1,7]])); // 6
console.log(tasks([[1,7],[8,13],[5,6],[10,14],[6,7]])); // 2
console.log(tasks([[1,3],[3,5],[5,9],[9,12],[12,13],[13,16],[16,17]])); // 1
console.log(tasks([[12,13],[13,15],[17,20],[13,14],[19,21],[18,20]])); // 3
console.log(tasks([[1, 7], [8, 9], [3, 6], [9, 14], [6, 7]])); // 2