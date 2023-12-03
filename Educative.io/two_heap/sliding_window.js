class MinHeap {
  constructor(data = new Array()) {
    this.data = data;
    this.compareVal = (a, b) => a - b;
    this.heapify();
  }

  heapify() {
    if (this.size() < 2) {
      return;
    }
    for (let i = 1; i < this.size(); i++) {
      this.percolateUp(i);
    }
  }

  peek() {
    if (this.size() === 0) {
      return null;
    }
    return this.data[0];
  }

  offer(value) {
    this.data.push(value);
    this.percolateUp(this.size() - 1);
  }

  poll() {
    if (this.size() === 0) {
      return null;
    }
    const result = this.data[0];
    const last = this.data.pop();
    if (this.size() !== 0) {
      this.data[0] = last;
      this.percolateDown(0);
    }
    return result;
  }

  percolateUp(index) {
    while (index > 0) {
      const parentIndex = (index - 1) >> 1;
      if (this.compareVal(this.data[index], this.data[parentIndex]) < 0) {
        this.swap(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  percolateDown(index) {
    const lastIndex = this.size() - 1;
    while (true) {
      const leftIndex = index * 2 + 1;
      const rightIndex = index * 2 + 2;
      let findIndex = index;

      if (
        leftIndex <= lastIndex &&
        this.compareVal(this.data[leftIndex], this.data[findIndex]) < 0
      ) {
        findIndex = leftIndex;
      }

      if (
        rightIndex <= lastIndex &&
        this.compareVal(this.data[rightIndex], this.data[findIndex]) < 0
      ) {
        findIndex = rightIndex;
      }

      if (index !== findIndex) {
        this.swap(index, findIndex);
        index = findIndex;
      } else {
        break;
      }
    }
  }

  swap(index1, index2) {
    [this.data[index1], this.data[index2]] = [
      this.data[index2],
      this.data[index1],
    ];
  }

  size() {
    return this.data.length;
  }
}

function medianSlidingWindow(nums, k) {
  if (k > nums.length) k = nums.length;

  let bigHalf = new MinHeap();
  bigHalf.compareVal = (a, b) => nums[a] - nums[b];
  let smallHalf = new MinHeap();
  smallHalf.compareVal = (a, b) => nums[b] - nums[a];

  for (let i = 0; i < k; i++) {
    smallHalf.offer(i);
  }

  let half = Math.ceil(k / 2);
  while (smallHalf.size() > half) {
    bigHalf.offer(smallHalf.poll());
  }

  let result = [];
  for (let i = k; i <= nums.length; i++) {
    let median = nums[smallHalf.peek()];
    if (k % 2 === 0) median = (median + nums[bigHalf.peek()]) / 2;
    result.push(median);

    if (nums[smallHalf.peek()] >= nums[i]) {
      bigHalf.offer(i);
      while (bigHalf.peek() <= k - i) bigHalf.poll();
      smallHalf.offer(bigHalf.poll())
    } else {
      smallHalf.offer(i);
      while (smallHalf.peek() <= k - i) smallHalf.poll();
      bigHalf.offer(smallHalf.poll())
    }
  }
  return result;
}

console.log(medianSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7] , 3))
console.log(medianSlidingWindow([-7, 2, 5, -2, 3, -1] , 2));
console.log(medianSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7] , 5));
console.log(medianSlidingWindow([1, 2] , 1));
console.log(medianSlidingWindow([2147483647, -14756, 21474, -2147483646, -2147483647, -5555, 9999, 78967] , 8));