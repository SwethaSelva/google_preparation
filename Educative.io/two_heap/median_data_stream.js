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
  pop() {
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
      if (rightChildIdx <= lastIdx && this.heap[leftChildIdx] > this.heap[rightChildIdx]) nextHeir = rightChildIdx;
      if (this.heap[curIdx] < this.heap[nextHeir]) break;
      [this.heap[curIdx], this.heap[nextHeir]] = [this.heap[nextHeir], this.heap[curIdx]];
      curIdx = nextHeir;
    }
  }
  findLength() {
    return this.heap.length;
  }
  insert (newVal) {
    let curIdx = this.heap.push(newVal) - 1;
    let parentIdx = this.findParent(curIdx);
    while (parentIdx >= 0) {
      if (this.heap[parentIdx] > this.heap[curIdx]) {
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
  peek() {
    return this.heap[0];
  }
  pop() {
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
      if (rightChildIdx <= lastIdx && this.heap[leftChildIdx] < this.heap[rightChildIdx]) nextHeir = rightChildIdx;
      
      if (this.heap[curIdx] > this.heap[nextHeir]) break;
      [this.heap[curIdx], this.heap[nextHeir]] = [this.heap[nextHeir], this.heap[curIdx]];
      curIdx = nextHeir;
    }
  }
  findLength() {
    return this.heap.length;
  }
  insert (newVal) {
    let curIdx = this.heap.push(newVal) - 1;
    let parentIdx = this.findParent(curIdx);
    while (parentIdx >= 0) {
      if (this.heap[parentIdx] < this.heap[curIdx]) {
        [this.heap[parentIdx], this.heap[curIdx]] = [this.heap[curIdx], this.heap[parentIdx]];
      } else break;
      curIdx = parentIdx;
      parentIdx = this.findParent(curIdx);
    }
    return this;
  }
}

class MedianOfStream {
  constructor() {
    this.maxHeadFirstHalf = new MaxHeap();
    this.minHeapSecondHalf = new MinHeap();
    this.array = [];
  }

  insertNum(num) {
    this.array.push(num);
    if (this.array.length === 1) {
      this.maxHeadFirstHalf.insert(num);
      return null;
    }
    if (this.maxHeadFirstHalf.peek() < num) {
      this.minHeapSecondHalf.insert(num);

      if (this.maxHeadFirstHalf.findLength() < this.minHeapSecondHalf.findLength()) {
        let newValue = this.minHeapSecondHalf.pop();
        this.maxHeadFirstHalf.insert(newValue);
      }
    } else {
      this.maxHeadFirstHalf.insert(num);

      if (this.maxHeadFirstHalf.findLength() > this.minHeapSecondHalf.findLength()) {
        let newValue = this.maxHeadFirstHalf.pop();
        this.minHeapSecondHalf.insert(newValue);
      }
    }
    return null;
  }

  // This function should return the median of the stored numbers  
  findMedian() {
    if (this.array.length % 2) {
      return this.maxHeadFirstHalf.findLength() > this.minHeapSecondHalf.findLength() ? this.maxHeadFirstHalf.peek(): this.minHeapSecondHalf.peek();
    }
    else return (this.maxHeadFirstHalf.peek() + this.minHeapSecondHalf.peek()) / 2;
  }
}

function inputRunner(optrArr, valArr) {
  let ms = new MedianOfStream();
  for (let i = 1; i < optrArr.length; i++) {
    if (optrArr[i] == "insert_num") {
      optrArr[i] = "insertNum";
      ms[optrArr[i]](...valArr[i])
    }
    else if (optrArr[i] == 'find_median') {
      optrArr[i] = "findMedian";
      console.log(ms[optrArr[i]](...valArr[i]));
    }
    
  }
}
inputRunner(["MedianOfStream","insert_num","insert_num","find_median","insert_num","find_median"] , [[],[1],[2],[],[3],[]]);
inputRunner(["MedianOfStream","insert_num","find_median","insert_num","insert_num","find_median","insert_num","find_median"] , [[],[22],[],[35],[36],[],[27],[]]);
inputRunner(["MedianOfStream","insert_num","find_median","insert_num","find_median"] , [[],[1],[],[1],[]]);
inputRunner(["MedianOfStream","insert_num","find_median","insert_num","find_median","insert_num","find_median","insert_num","find_median","insert_num","find_median"] , [[],[-1],[],[-22],[],[-3],[],[-4],[],[-5],[]]);
inputRunner(["MedianOfStream","insert_num","insert_num","find_median","insert_num","find_median"] , [[],[12],[46],[],[32],[]]);