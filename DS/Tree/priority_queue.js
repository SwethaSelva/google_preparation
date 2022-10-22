class PriorityQueue {
  constructor () {
    this.heap = [];
  }
  findChildrenIdx(parentIdx) {
    return [parentIdx*2 + 1, parentIdx*2 + 2];
  }
  findParentIdx(childrenIdx) {
    return Math.ceil(childrenIdx/2) - 1;
  }
  insert (val = Infinity, priority = Infinity) {
    let curIdx = this.heap.push([val, priority]) -1;
    while (curIdx >= 0) {
      let parentIdx = this.findParentIdx(curIdx);
      if (parentIdx < 0) return false;
      if (this.heap[curIdx][1] >= this.heap[parentIdx][1]) return true;
      [this.heap[curIdx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[curIdx]];
      curIdx = parentIdx;
    }
  }
  extractMinVal () {
    if (!this.heap.length) return this.heap = [];
    let parentIdx = 0;
    let childIdx = -1;
    while (parentIdx < this.heap.length - 1) {
      let [leftChildIdx, rightChildIdx] = this.findChildrenIdx(parentIdx);
      if (leftChildIdx >= this.heap.length) break;

      childIdx = leftChildIdx;
      if (
        rightChildIdx < this.heap.length
        && this.heap[rightChildIdx][1] < this.heap[leftChildIdx][1]
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

let pQ = new PriorityQueue();
pQ.insert(1,12);
pQ.insert(1,13);
pQ.insert(1,10);
pQ.insert(1,-1);
pQ.insert(1,0);
pQ.insert(1,100);
pQ.insert(1,101);
pQ.insert(1,1);
pQ.extractMinVal();
console.log(JSON.stringify(pQ));

pQ.extractMinVal();
console.log(JSON.stringify(pQ));
pQ.extractMinVal();
console.log(JSON.stringify(pQ));

pQ.extractMinVal();
console.log(JSON.stringify(pQ));

pQ.extractMinVal();
console.log(JSON.stringify(pQ));

pQ.extractMinVal();
console.log(JSON.stringify(pQ));

pQ.extractMinVal();
console.log(JSON.stringify(pQ));


console.log(JSON.stringify(pQ));