class Node {
  constructor(capital = 0, profit = 0) {
    this.capital = capital;
    this.profit = profit;
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
  deleteMinVal() {
    [this.heap[0], this.heap[this.findLength() - 1]] = [this.heap[this.findLength() - 1], this.heap[0]];
    let minVal = this.heap.pop();

    this.sinkDown();
    return minVal;
  }
  sinkDown() {
    let curIdx = 0;
    const lastIdx = this.findLength() - 1;
    while (curIdx < lastIdx) {
      let [leftChildIdx, rightChildIdx] = this.findChildren(curIdx);
      if (leftChildIdx > lastIdx) break;
      let nextHeir = leftChildIdx;
      if (rightChildIdx <= lastIdx && this.heap[leftChildIdx].capital > this.heap[rightChildIdx].capital) {
        nextHeir = rightChildIdx;
      }
      [this.heap[curIdx], this.heap[nextHeir]] = [this.heap[nextHeir], this.heap[curIdx]];
      curIdx = nextHeir;
    }
  }
  findLength() {
    return this.heap.length;
  }
  insert (capital, profit) {
    let newVal = new Node(capital, profit);
    let curIdx = this.heap.push(newVal) - 1;
    let parentIdx = this.findParent(curIdx);
    while (parentIdx >= 0) {
      if (this.heap[parentIdx].capital > this.heap[curIdx].capital) {
        [this.heap[parentIdx], this.heap[curIdx]] = [this.heap[curIdx], this.heap[parentIdx]];
      } else break;
      curIdx = parentIdx;
      parentIdx = this.findParent(curIdx);
    }
    return this;
  }
}

class MaxHeap {
  constructor() {
    this.heap = [];
  }
  findChildren (parentIdx) {
    return [2*parentIdx+1, 2*parentIdx+2];
  }
  findParent (childIdx) {
    return Math.floor((childIdx - 1)/2);
  }
  deleteMinVal() {
    [this.heap[0], this.heap[this.findLength() - 1]] = [this.heap[this.findLength() - 1], this.heap[0]];
    let minVal = this.heap.pop();

    this.sinkDown();
    return minVal;
  }
  sinkDown() {
    let curIdx = 0;
    const lastIdx = this.findLength() - 1;
    while (curIdx < lastIdx) {
      let [leftChildIdx, rightChildIdx] = this.findChildren(curIdx);
      if (leftChildIdx > lastIdx) break;
      let nextHeir = leftChildIdx;
      if (rightChildIdx <= lastIdx && this.heap[leftChildIdx].profit < this.heap[rightChildIdx].profit) {
        nextHeir = rightChildIdx;
      }
      [this.heap[curIdx], this.heap[nextHeir]] = [this.heap[nextHeir], this.heap[curIdx]];
      curIdx = nextHeir;
    }
  }
  findLength() {
    return this.heap.length;
  }
  insert (capital, profit) {
    let newVal = new Node(capital, profit);
    let curIdx = this.heap.push(newVal) - 1;
    let parentIdx = this.findParent(curIdx);
    while (parentIdx >= 0) {
      if (this.heap[parentIdx].profit < this.heap[curIdx].profit) {
        [this.heap[parentIdx], this.heap[curIdx]] = [this.heap[curIdx], this.heap[parentIdx]];
      } else break;
      curIdx = parentIdx;
      parentIdx = this.findParent(curIdx);
    }
    return this;
  }
}

function maximumCapital(c, k, capitals, profits){
  let capitalHeap = new MinHeap();
  let profitHeap = new MaxHeap();
  for (let i = 0; i < capitals.length; i++) {
    capitalHeap.insert(capitals[i], profits[i]);
  }
  for (let i = 0; i < k; i++) {
    while (capitalHeap.findLength()) {
      let { capital: reqCapital, profit: curProfit } = capitalHeap.peek();
      if (reqCapital > c) break;
      capitalHeap.deleteMinVal();
      profitHeap.insert(reqCapital, curProfit);
    }
    c += profitHeap.deleteMinVal().profit;
  }
  return c || -1;
}
// O(n+k log n)

console.log(maximumCapital(1 , 2 , [1,2,2,3] , [2,4,6,8])); // 
console.log(maximumCapital(2 , 2 , [1,2,3,4] , [1,3,5,7]));
console.log(maximumCapital(2 , 3 , [1,3,4,5,6] , [1,2,3,4,5]));
console.log(maximumCapital(1 , 3 , [0,1,2] , [1,2,3]));
console.log(maximumCapital(1 , 3 , [1,1,2,3,11,19,21] , [2,7,9,16,17,18])); // 1 + 7 + 16 + 18