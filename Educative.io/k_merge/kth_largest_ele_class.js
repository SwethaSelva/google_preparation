let heap = require('./Heap');

class KthLargest{
    constructor(k, nums){
        this.minHeap = new heap();
        for (let i = 0; i < nums.length; i++) {
            this.minHeap.insert(nums[i]);
        }
        while (this.minHeap.size() > k) {
            this.minHeap.pop();
        }
    }

    add(val){
        if (val > this.minHeap.peek()) {
            this.minHeap.pop();
            this.minHeap.insert(val);
        }
        return this.returnKthLargest();
    }
        
    // returns kth largest element from heap
    returnKthLargest(){
        return this.minHeap.peek();
    }
}

export default KthLargest