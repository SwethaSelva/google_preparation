class MinHeap {
  constructor () {
    this.heap = [];
  }
  findChildrenIdx(parentIdx) {
    return [parentIdx*2 + 1, parentIdx*2 + 2];
  }
  findParentIdx(childrenIdx) {
    return Math.ceil(childrenIdx/2) - 1;
  }
  insert (val) {
    let curIdx = this.heap.push(val) -1;
    while (curIdx >= 0) {
      let parentIdx = this.findParentIdx(curIdx);
      if (parentIdx < 0) return false;
      if (this.heap[curIdx] >= this.heap[parentIdx]) return true;
      [this.heap[curIdx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[curIdx]];
      curIdx = parentIdx;
    }
  }
  deleteMinVal () {
    if (!this.heap.length) return this.heap = [];
    let parentIdx = 0;
    let childIdx = -1;
    while (parentIdx < this.heap.length - 1) {
      let [leftChildIdx, rightChildIdx] = this.findChildrenIdx(parentIdx);
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
    this.heap.length = this.heap.length - 1;
    return this.heap;
  }
  peek () {
    return this.heap[0];
  }
}

let heap = new MinHeap();
heap.insert(12);
heap.insert(13);
heap.insert(10);
heap.insert(-1);
heap.insert(0);
heap.insert(100);
heap.insert(101);
heap.insert(1);
heap.deleteMinVal();
heap.deleteMinVal();
console.log(JSON.stringify(heap));
heap.deleteMinVal();

console.log(JSON.stringify(heap));