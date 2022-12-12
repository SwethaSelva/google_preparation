/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
class MinHeap {
  constructor() {
    this.heap = [];
    this.comparator = (a, b) => a - b;
  }
  size() {
    return this.heap.length;
  }
  findChildren(parentIdx) {
    return [2 * parentIdx + 1, 2 * parentIdx + 2];
  }
  findParent(childIdx) {
    return Math.floor((childIdx - 1) / 2);
  }
  insert(val) {
    let curIdx = this.heap.push(val) - 1;
    while (curIdx > 0) {
      let parentIdx = this.findParent(curIdx);
      if (this.comparator(this.heap[parentIdx], this.heap[curIdx]) < 0) break;
      [this.heap[parentIdx], this.heap[curIdx]] = [this.heap[curIdx], this.heap[parentIdx]];
      curIdx = parentIdx;
    }
    return true;
  }
  pop() {
    [this.heap[0], this.heap[this.size() - 1]] = [this.heap[this.size() - 1], this.heap[0]];
    let deletedVal = this.heap.pop();
    let curIdx = 0;
    while (curIdx < this.size() - 1) {
      let [nextHeir, rightIdx] = this.findChildren(curIdx);
      if (nextHeir > this.size() - 1) break;
      if (rightIdx <= this.size() - 1 && this.comparator(this.heap[rightIdx], this.heap[nextHeir]) < 0) nextHeir = rightIdx;
      if (this.comparator(this.heap[curIdx], this.heap[nextHeir]) < 0) break;
      [this.heap[nextHeir], this.heap[curIdx]] = [this.heap[curIdx], this.heap[nextHeir]];
      curIdx = nextHeir;
    }
    return deletedVal;
  }
}
var kClosest = function (points, k) {
  let result = [];
  let minHeap = new MinHeap();
  minHeap.comparator = (a, b) => a[0] - b[0];
  for (let i = 0; i < points.length; i++) {
    minHeap.insert([Math.sqrt(points[i][0] ** 2 + points[i][1] ** 2), points[i]]);
  }
  while (result.length < k) result.push(minHeap.pop()[1]);
  return result;
};

console.log(kClosest([[1,3],[-2,2]], 1));