var maxNonDecreasingLength = function(nums1, nums2) {
    let memo = new Map();
  
    function combinationGenerator (curPos = 0, prevEle = 0, curCount = 0, curPath = '') {
      if (curPos >= nums1.length) return curCount;
  
      let path1 = `${curPath}-${nums1[curPos]}`
      if (!memo.get(path1)) {
          let nonDecCount = 1;
          if (prevEle <= nums1[curPos]) nonDecCount = curCount + 1;
          let maxVal = Math.max(combinationGenerator (curPos + 1, nums1[curPos], nonDecCount, path1), curCount);
          memo.set(path1, maxVal);
      }
  
      let path2 = `${curPath}-${nums2[curPos]}`
      if (!memo.get(path2)) {
          let nonDecCount = 1;
          if (prevEle <= nums2[curPos]) nonDecCount = curCount + 1;
          let maxVal = Math.max(combinationGenerator (curPos + 1, nums2[curPos], nonDecCount, path2), curCount);
          memo.set(path2, maxVal);
      }
      return Math.max(memo.get(path1), memo.get(path2));
    }
    let result = combinationGenerator()
    console.log({ memo })
    return result;
};

console.log(maxNonDecreasingLength([2,3,1], [1,2,1]));
console.log(maxNonDecreasingLength([1,3,2,1], [2,2,3,4]));
console.log(maxNonDecreasingLength([1,1], [2,2]));
console.log(maxNonDecreasingLength([5,18,5], [17,5,8]));