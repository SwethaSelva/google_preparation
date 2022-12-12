let MinHeap = require('./Heap');

function mergeSorted1(nums1, m, nums2, n){
    let smallestValHeap = new MinHeap();
    let curIdx = 0;

    while (curIdx < m || curIdx < n || smallestValHeap.findLength()) {
        if (curIdx < n) smallestValHeap.insert(nums2[curIdx]);
        if (curIdx < m) smallestValHeap.insert(nums1[curIdx]);

        let smallestVal = smallestValHeap.pop();
        if (smallestVal !== undefined) nums1[curIdx] = smallestVal;
        curIdx++;
    }
    return nums1;
}

function mergeSorted(nums1, m, nums2, n) {
    let p = nums1.length - 1;
    let ptr1 = m - 1;
    let ptr2 = n - 1;

    while (p >= 0 && ptr2 >= 0) {
        if (nums1[ptr1] > nums2[ptr2]) {
            nums1[p] = nums1[ptr1];
            ptr1--;
        } else {
            nums1[p] = nums2[ptr2];
            ptr2--;
        }
        p--;
    }
    return nums1
}
console.log(mergeSorted([1,2,3,0,0,0] , 3 , [4,5,6] , 3));
console.log(mergeSorted([-1,0,0,0,3,0,0,0,0,0,0] , 5 , [-1,-1,0,0,1,2] , 6));
console.log(mergeSorted([6,7,8,9,10,0,0,0,0,0] , 5 , [1,2,3,4,5] , 5));
console.log(mergeSorted([10,49,99,110,176,0,0,0,0,0,0,0,0,0,0,0,0,0] , 5 , [1,2,4,7,8,12,15,19,24,50,69,80,100] , 13));
console.log(mergeSorted([0,1,4,9,0,0,0,0,0,0] , 4 , [-111,-20,-5,5,11,20] , 6));
