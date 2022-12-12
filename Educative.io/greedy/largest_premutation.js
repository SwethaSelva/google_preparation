function largestPermutation (arr, swaps) {
  let sortArr = [];
  for (let i = 0; i < arr.length; i++) sortArr[i] = [arr[i], i];
  sortArr = sortArr.sort((a,b) => b[0] - a[0]);

  for (let i = 0; i < arr.length && swaps; i++) {
    let highIdx = sortArr[i][1];
    sortArr[arr[highIdx]][1] = i;
    if (highIdx !== i) {
      [arr[i], arr[highIdx]]  = [arr[highIdx], arr[i]];
      swaps--;
    }
  }
  return arr;
}

console.log(largestPermutation([4,2,6,9,1], 3)); // [9, 6, 4, 2, 1]
console.log(largestPermutation([4,2,4,9,1], 3)); // [9, 4, 4, 2, 1]