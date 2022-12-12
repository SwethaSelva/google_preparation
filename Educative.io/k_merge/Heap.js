class Heap {
  constructor() {
    this.heap = [];
    this.compareFn = (a,b) => a < b;
  }
  findChildren(parentIdx) {
    return [2 * parentIdx + 1, 2 * parentIdx + 2];
  }
  findParent(childIdx) {
    return Math.floor((childIdx - 1) / 2);
  }
  size() {
    return this.heap.length;
  }
  peek() {
    return this.heap[0];
  }
  insert (val) {
    let curIdx = this.heap.push(val) - 1;
    while (curIdx > 0) {
      let parentIdx = this.findParent(curIdx);
      if (!this.compareFn(this.heap[curIdx], this.heap[parentIdx])) break;
      [this.heap[parentIdx], this.heap[curIdx]] = [this.heap[curIdx], this.heap[parentIdx]];

      curIdx = parentIdx;
    }
    return null;
  }
  pop() {
    [this.heap[0], this.heap[this.size() - 1]] = [this.heap[this.size() - 1], this.heap[0]];
    let returnVal = this.heap.pop();

    let curIdx = 0;
    let lastIdx = this.size() - 1;
    while (curIdx < lastIdx) {
      let [nextHeir, rightChild] = this.findChildren(curIdx);
      if (nextHeir > lastIdx) break;

      if (rightChild <= lastIdx && this.compareFn(this.heap[rightChild], this.heap[nextHeir])) nextHeir = rightChild;
      if (!this.compareFn(this.heap[nextHeir], this.heap[curIdx])) break;

      [this.heap[nextHeir], this.heap[curIdx]] = [this.heap[curIdx], this.heap[nextHeir]];
      curIdx = nextHeir;
    }
    return returnVal;
  }
}

module.exports = Heap;